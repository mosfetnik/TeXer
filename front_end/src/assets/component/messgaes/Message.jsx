import { useAuthContext } from "../../../context/useAuthContext";
import useConversation from "../../../zustand/useConversation";
import extractTime from "../../../utils/extractTime"
const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser._id;
  const formattedTime =extractTime(message.createdAt)
  const chatclassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const shakeClass = message.shouldShake ? "shake":""

  return (
    <div className={`chat ${chatclassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>

      <div className={`chat-bubble text-white bg-blue-500 ${bubbleBgColor}${shakeClass}  pb-2 `}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 item-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
