import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { getOrCreateConversation } from "@/lib/conversation";
import { currentProfile } from "@/lib/current-profile";
import { ChatHeader } from "@/components/chat/chat-header";
import { ChatMessages } from "@/components/chat/chat-messages";
import { ChatInput } from "@/components/chat/chat-input";
import { MediaRoom } from "@/components/media-room";
import Image from "next/image";
import BackgroundImage from "../../../../../../../components/backgroundImage";

interface MemberIdPageProps {
  params: {
    memberId: string;
    serverId: string;
  };
  searchParams: {
    video?: boolean;
  };
}

const MemberIdPage = async ({ params, searchParams }: MemberIdPageProps) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  const currentMember = await db.member.findFirst({
    where: {
      serverId: params.serverId,
      profileId: profile.id,
    },
    include: {
      profile: true,
    },
  });

  if (!currentMember) {
    return redirect("/");
  }

  const conversation = await getOrCreateConversation(
    currentMember.id,
    params.memberId
  );

  if (!conversation) {
    return redirect(`/servers/${params.serverId}`);
  }

  const { memberOne, memberTwo } = conversation;

  const otherMember =
    memberOne.profileId === profile.id ? memberTwo : memberOne;

  return (
    <div className="relative h-full w-full">
      <BackgroundImage src="/bg.jpeg" alt="Description of image" />

      <div className="absolute inset-0 flex flex-col bg-opacity-30 bg-white dark:bg-[#313338]">
        <ChatHeader
          imageUrl={otherMember.profile.imageUrl}
          name={otherMember.profile.name}
          serverId={params.serverId}
          type="conversation"
        />

        {searchParams.video && (
          <MediaRoom chatId={conversation.id} video={true} audio={true} />
        )}

        {!searchParams.video && (
          <>
            <ChatMessages
              member={currentMember}
              name={otherMember.profile.name}
              chatId={conversation.id}
              type="conversation"
              apiUrl="/api/direct-messages"
              paramKey="conversationId"
              paramValue={conversation.id}
              socketUrl="/api/socket/direct-messages"
              socketQuery={{
                conversationId: conversation.id,
              }}
            />
            <ChatInput
              name={otherMember.profile.name}
              type="conversation"
              apiUrl="/api/socket/direct-messages"
              query={{
                conversationId: conversation.id,
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default MemberIdPage;
