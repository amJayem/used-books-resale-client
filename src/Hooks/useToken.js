import { useEffect, useState } from "react";

const useToken = (email) => {
    const [token, setToken] = useState('');
    const [tokenLoading, setTokenLoading] = useState(true);
    // console.log('useToken email : ',email);
  useEffect(() => {
    if (email !== undefined) {
      fetch(`https://12-book-shop-server.vercel.app/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        if (data.accessToken !== 'forbidden') {
            // console.log('token => ',data.accessToken);
            localStorage.setItem("token", data.accessToken);
            setToken(data.accessToken);
            setTokenLoading(false);
          }
          else{
            localStorage.setItem("token",'user deleted by admin');
            setTokenLoading(false);
          }
        })
        .catch(e=>{
          console.error('token error => ',e);
        })
    }
  }, [email]);
  return [token,tokenLoading];
};

export default useToken;
