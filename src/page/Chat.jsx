import { auth, db } from "../firebase/config";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import Message from "../components/Message";

const Chat = ({ room, setRoom }) => {
  console.log(auth, "auth");
  const [messages, setMessages] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const messagesCol = collection(db, "messages");
    await addDoc(messagesCol, {
      text: e.target[0].value,
      room,
      sender: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });
    e.target.reset();
  };
  useEffect(() => {
    const messagesCol = collection(db, "messages");
    const q = query(
      messagesCol,
      where("room", "==", room),
      orderBy("createdAt", "asc")
    );

    onSnapshot(q, (snapshot) => {
      const tempMsg = [];
      snapshot.docs.forEach((doc) => {
        tempMsg.push(doc.data());
      });
      //veri tabanına canlı olarak abone olma yöntemi
      setMessages(tempMsg);
    });
  }, []);
  console.log(messages);
  return (
    <div className="chat-page">
      <header>
        <p>{auth.currentUser?.displayName}</p>
        <p>{room}</p>
        <button onClick={() => setRoom(null)}>Farklı Oda</button>
      </header>
      <main>
        {messages.map((data, i) => (
          <Message key={i} data={data} />
        ))}
      </main>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Mesajınızı yazınız..." />
        <button>Gönder</button>
      </form>
    </div>
  );
};

export default Chat;
