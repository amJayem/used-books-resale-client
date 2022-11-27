import { useEffect, useState } from "react";

const useToken = (email) => {
    const [token, setToken] = useState('');
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.accessToken) {
            console.log(data.accessToken);
            localStorage.setItem("token", data.accessToken);
            setToken(data.accessToken);
          }
        })
        .catch(e=>{
          console.error('token error => ',e);
        })
    }
  }, [email]);
  return [token];
};

export default useToken;
