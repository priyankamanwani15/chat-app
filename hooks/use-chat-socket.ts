import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Member, Message, Profile } from "@prisma/client";
import { useToast } from "@chakra-ui/react";
import { currentProfile } from "@/lib/current-profile";
import { useSocket } from "@/components/providers/socket-provider";

type ChatSocketProps = {
  addKey: string;
  updateKey: string;
  queryKey: string;
}

type MessageWithMemberWithProfile = Message & {
  member: Member & {
    profile: Profile;
  }
}

export const useChatSocket = ({
  addKey,
  updateKey,
  queryKey
}: ChatSocketProps) => {
  const { socket } = useSocket();
  const queryClient = useQueryClient();
  const toast = useToast();

  useEffect(() => {
    const fetchProfileAndNotify = async (message: MessageWithMemberWithProfile) => {
      try {
        const profile = await currentProfile();

        if (profile?.userId !== message.member.profile.userId) {
          toast({
            title: `New message from ${message.member.profile.name || "Unknown Sender"}`,
            description: message.content,
            status: "info",
            duration: 5000,
            isClosable: true,
            position: "top-right",
            variant: "solid",
            // Customize toast styling directly
            containerStyle: {
              backgroundColor: "#2b6cb0", // Custom background color
              color: "white", // Custom text color
            },
          });
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    if (!socket) {
      return;
    }

    const playNotificationSound = () => {
      const audio = new Audio('/sounds/notification_ding.mp3'); // Path to your notification sound file
      audio.play();
    };

    socket.on(updateKey, (message: MessageWithMemberWithProfile) => {
      queryClient.setQueryData([queryKey], (oldData: any) => {
        if (!oldData || !oldData.pages || oldData.pages.length === 0) {
          return oldData;
        }

        const newData = oldData.pages.map((page: any) => ({
          ...page,
          items: page.items.map((item: MessageWithMemberWithProfile) =>
            item.id === message.id ? message : item
          ),
        }));

        return {
          ...oldData,
          pages: newData,
        };
      });
    });

    socket.on(addKey, (message: MessageWithMemberWithProfile) => {
      playNotificationSound(); // Play sound for new messages

      fetchProfileAndNotify(message);

      queryClient.setQueryData([queryKey], (oldData: any) => {
        if (!oldData || !oldData.pages || oldData.pages.length === 0) {
          return {
            pages: [{
              items: [message],
            }],
          };
        }

        const newData = [...oldData.pages];
        newData[0] = {
          ...newData[0],
          items: [message, ...newData[0].items],
        };

        return {
          ...oldData,
          pages: newData,
        };
      });
    });

    return () => {
      socket.off(addKey);
      socket.off(updateKey);
    };
  }, [queryClient, addKey, queryKey, socket, updateKey, toast]);
}
