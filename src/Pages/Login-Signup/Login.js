import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useToken from "../../Hooks/useToken";
import SocialLogin from "./SocialLogin";

const Login = () => {
    const [error, setError] = useState('');
  const { user, SignInUser } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState('');
  const [token]=useToken(userEmail);
  const navigate = useNavigate();

  if(user?.email && token){
    navigate('/');
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    setError("");
    SignInUser(email, password)
    .then(data=>{
        // console.log(data);
        setUserEmail(email);
        console.log(email);
    })
    .catch(e=>{
        setError(e.message)
        console.error('sign in error => ',e);
    })
  };
  
  return (
    <div>
      <div className="hero">
        <form onSubmit={handleSubmit} className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link to='/signup' className="label-text-alt link link-hover">
                    Click here to create a new account
                  </Link>
                </label>
              </div>
              {error && <p className="text-error">{error}</p>}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <div className="divider"></div>
                <div className="mx-auto my-0">
                  <SocialLogin />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
