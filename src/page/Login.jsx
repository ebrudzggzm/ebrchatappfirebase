import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./../firebase/config";
const Login = ({ setIsAuth }) => {
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setIsAuth(true);
        localStorage.setItem("token", result.user.refreshToken);
      })
      .catch((error) => {
        console.error("Error signing in:", error);
      });
  };
  return (
    <div className="container">
      <div className="login">
        <h1>Chat Odası</h1>
        <p>Devam Etmek İçin Giriş Yapın</p>
        <button onClick={handleLogin}>
          <img src="/g-logo.png" alt="" />
          <span>Google ile gir</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
