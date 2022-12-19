import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useToken from "../../Hooks/useToken";
import Loader from "../Shared/Loader/Loader";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const [error, setError] = useState("");
  const { user, loading, setLoading, SignInUser } = useContext(AuthContext);
  // const [userEmail, setUserEmail] = useState("");
  const [token] = useToken(user?.email);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, token]);

  if(loading){
    return Loader();
  }

  // console.log({user});

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    setError("");
    SignInUser(email, password)
      .then((data) => {
        // console.log(data);
        // setUserEmail(email);
        toast.success("User login success");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
        console.error("sign in error => ", e);
      });
  };


  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
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
                  <Link to="/signup" className="label-text-alt link link-hover">
                    Click here to create a new account
                  </Link>
                </label>
              </div>
              {error && <p className="text-error">{error}</p>}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="divider -mt-5 "></div>
            <div className="mx-auto mb-10">
            <p className="mb-2 text-secondary text-xs">Sign in as a buyer</p>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
