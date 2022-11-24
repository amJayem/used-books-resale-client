import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import SocialLogin from "./SocialLogin";

const Signup = () => {
  const { SignUpUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imgHostingKey = process.env.REACT_APP_IMGBB_KEY;

  const handleLogin = (form) => {
    const name = form.name;
    const email = form.email;
    const password = form.password;
    const image = form.image[0];
    console.log(image, name, email, password);

    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;

    fetch(url, {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const img = data.data.display_url;
          console.log("img upload done", img);

          SignUpUser(email, password)
            .then((data) => {
              console.log(data);
              const user = { displayName: name, photoURL: img };

              updateUserProfile(user)
                .then((data) => {
                  console.log("working ", data);
                })
                .catch((e) => {
                  setError(e.message);
                  console.error("update error => ", e);
                });
            })
            .catch((e) => {
              console.error("signup error => ", e);
              setError(e.message);
            });
        }
        console.log(data);
      })
      .catch((e) => {
        setError(e.message);
        console.error("img upload error => ", e);
      });

    setError("");
  };
  return (
    <div className="hero">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="hero-content flex-col"
      >
        <div className="text-center ">
          <h1 className="text-4xl font-semibold my-5">Create a new account!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is required",
                })}
                className="input input-bordered "
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                {...register("email", {
                  required: "Email Address is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Email is invalid" },
                })}
                className="input input-bordered "
              />
              {errors.email && (
                <p className=" my-2 text-error">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="input input-bordered "
              />
              {errors.email && (
                <p className=" my-2 text-error">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="file"
                {...register("image", {
                  required: "Image is required",
                })}
                className="input"
              />
            </div>
            <div className="form-control">
              <input
                className="btn btn-primary w-full"
                type="submit"
                value="signup"
              />
              <div className="divider"></div>
              <div className="mx-auto my-0">
                <SocialLogin />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
