import { auth } from "../firebase/config";

const Message = ({ data }) => {
  if (auth.currentUser?.uid === data.sender.id) {
    return <p className="msg-user">{data.text}</p>;
  }
  return (
    <div className="msg-other">
      <div>
        <img src={data.sender.photo} alt="" />
        <span>{data.sender.name}</span>
      </div>
      <p>{data.text}</p>
    </div>
  );
};

export default Message;
