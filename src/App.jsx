import { useState } from "react";
import Login from "./page/Login";
import Room from "./page/Room";
import Chat from "./page/Chat";

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));
  const [room, setRoom] = useState(null);
  if (!isAuth) return <Login setIsAuth={setIsAuth} />;
  return (
    <div className="container">
      {room ? (
        <Chat room={room} setRoom={setRoom} />
      ) : (
        <Room setIsAuth={setIsAuth} setRoom={setRoom} />
      )}
    </div>
  );
};

export default App;

// import { signInWithPopup } from "firebase/auth";
// import { auth, provider } from "./firebase/config";
// import { useState } from "react";

// const App = () => {
//   const [user, setUser] = useState();

//   const handleLogin = () => {
//     signInWithPopup(auth, provider).then((res) => setUser(res.user));
//   };

//   console.log(user,'user')
//   return (
//     <div >
//       {user ? (
//         <div>
//           <img width={80} src={user.metadata.photoURL} />
//           <h1>{user.displayName}</h1>
//           <h1>{user.email}</h1>
//         </div>
//       ) : (
//         <button onClick={handleLogin}>Google ile Giriş Yap</button>
//       )}
//     </div>
//   );
// };

// export default App;
