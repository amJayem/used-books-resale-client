import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import SocialLogin from "./SocialLogin";

const Signup = () => {
  const { user, SignUpUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  if (user?.email) {
    navigate("/");
  }

  const roles = ["Buyer", "Seller"];

  const imgHostingKey = process.env.REACT_APP_IMGBB_KEY;

  const handleLogin = (form) => {
    const name = form.name;
    const email = form.email;
    const password = form.password;
    const image = form.image[0];
    const role = form.role;
    console.log(image, name, email, password);

    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;

    // image hosting to imgbb
    fetch(url, {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const img = data.data.display_url;
          console.log("img upload done", img);

          // user creating by signup
          SignUpUser(email, password)
            .then((data) => {
              console.log(data);
              const user = { displayName: name, photoURL: img };
              const userForDB = {
                name,
                email,
                image: img,
                role,
              };

              // user storing to db
              fetch("http://localhost:5000/users", {
                method: "post",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(userForDB),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log("db info: ", data);
                })
                .catch((e) => {
                  console.error("storing user to db error => ", e);
                  setError(e.message);
                });
              setError("");

              // user profile updated with name and image
              updateUserProfile(user)
                .then((data) => {
                  toast.success("User created successfully");
                  navigate("/");
                })
                .catch((e) => {
                  setError(e.message);
                  console.error("update error => ", e);
                });
              setError("");
            })
            .catch((e) => {
              console.error("signup error => ", e);
              setError(e.message);
            });
          setError("");
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
      <div className="hero-content flex-col">
        <div className="text-center ">
          <h1 className="text-4xl font-semibold my-5">Create a new account!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
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
                <span className="label-text">Role</span>
              </label>
              <select
                className="input select select-bordered w-full max-w-xs"
                type="text"
                {...register("role")}
              >
                <option disabled>Please Select a Role</option>
                {roles.map((role, i) => (
                  <option
                    key={role.i}
                    // value={role.name}
                  >
                    {role}
                  </option>
                ))}
              </select>
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
              {error && <p className="text-error">{error}</p>}
              <input
                className="btn btn-primary w-full"
                type="submit"
                value="signup"
              />
            </div>
          </form>
          <div className="divider -mt-5"></div>
          <div className="mx-auto mb-10">
            <p className="mb-2 text-secondary text-xs">Sign in as a buyer</p>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
