import { Hash } from "lucide-react";

interface ChatWelcomeProps {
  name: string;
  type: "channel" | "conversation";
}

export const ChatWelcome = ({ name, type }: ChatWelcomeProps) => {
  return (
    <div className="space-y-2 px-4 mb-4">
      {/* {type === "channel" && (
        <div className="h-[75px] w-[75px] rounded-full bg-blue-500 dark:bg-blue-500 flex items-center justify-center">
          <Hash className="h-12 w-12 text-white" />
        </div>
      )} */}
      <p className="text-xl md:text-3xl font-bold text-blue-500">
        {type === "channel" ? "Start new chats in " : ""}
        {name}
      </p>
      <p className="text-blue-500 dark:text-zinc-400 text-sm">
        {type === "channel"
          ? `This is the start of the ${name} channel.`
          : `This is the start of your conversation with ${name}`}
      </p>
    </div>
  );
};
