import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../GlobalContext";
import { useThemeContext } from "../../ThemeContext";
import "./Login.css";

const Login = () => {

  const navigate = useNavigate();
  const { setUser } = useGlobalContext();
  const { activeTheme } = useThemeContext();

  const firstName = (name) => {
    return name.split(' ')[0];
  };

  const handleClick = () => {
    signInWithPopup(auth, googleAuthProvider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      setUser(firstName(user.displayName));
      navigate("/");
    })
    .catch(err => {});
  };

  return (
    <div className="login" style={{backgroundColor: activeTheme.bg0}}>
      <button onClick={handleClick}>Login / Signup</button>
    </div>
  );

};

export default Login;