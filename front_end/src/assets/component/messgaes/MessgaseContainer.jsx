import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import Messages from "./Messages";
const MessgaseContainer = () => {
  const noChatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="'bg-slate-500 px-4 y-2 mb-2">
            <span className="label-text">To</span>{" "}
            <span className="text-gray-900 fon-bold">John DOe</span>{" "}
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessgaseContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        className="px-4 text-center sm:text-lg md:text- xl text-gray-200 font-semibold flex flex-col
  items-center gap-2"
      >
        <p>Welcome 👋 John Doe ❄</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
