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
        console.log('social login: ',data);
        if(data.user){
          const userForDB = {
            name: data.user.displayName,
            email:data.user.email ,
            image:data.user.photoURL ,
            role: 'buyer',
          };

          // storing social login user to db as a buyer
          fetch("https://12-book-shop-server.vercel.app/users", {
                method: "post",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(userForDB),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log("social login info: ", data);
                  // console.log(userForDB);
                })
                .catch((e) => {
                  console.error("social login user storing to db error => ", e);
                });
        }
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
