import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const { SocialSignIn } = useContext(AuthContext);
  const gProvider = new GoogleAuthProvider();

  const handleLogin = () => {
    SocialSignIn(gProvider)
    //   .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => console.error("social login error => ", e));
  };
  return (
    <div>
      <button onClick={handleLogin} className="btn btn-outline">
        <FcGoogle /> 
        <span className="ml-3">Sign in with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
