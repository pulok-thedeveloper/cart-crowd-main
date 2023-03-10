import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import signup from "../../Assests/undraw_shopping__bags_mjvf.svg";
import { AuthContext } from "../../Context/AuthProvider";
import "./Signup.css";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const { createUser, signInwithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((err) => console.log(err.message));
  };

  const handleGoogleSignIn = () => {
    signInwithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="signup-wrapper">
      <div className="min-h-screen grid grid-cols-2 items-center justify-items-center">
        <div>
          <img className="w-full h-full" src={signup} alt="" />
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="signup-form p-10">
            <h3 className="text-center text-3xl mb-8">
              <Link className="signup-link" to="/signup">
                Signup
              </Link>{" "}
              | <Link to="/login">Login</Link>
            </h3>
            <div className="grid gap-5">
              <div className="flex flex-col form-control gap-2">
                <label>Name</label>
                <input
                  className="w-96 p-4"
                  type="text"
                  placeholder="Enter full name"
                />
              </div>
              <div className="flex flex-col form-control gap-2">
                <label>Email</label>
                <input
                  className="w-96 p-4"
                  type="email"
                  placeholder="Enter email address"
                />
              </div>
              <div className="flex flex-col form-control gap-2">
                <label>Password</label>
                <input
                  className="w-96 p-4"
                  type="password"
                  placeholder="Enter a strong password"
                />
              </div>
              <div className="form-control mt-5">
                <input
                  className="signup-btn w-full p-3"
                  type="submit"
                  value="Signup"
                />
              </div>
            </div>
            <div className="devider grid justify-center mt-5">
              <p className="text-gray-500">----------- OR ------------</p>
            </div>
            <div>
              <button
                onClick={handleGoogleSignIn}
                className="google-btn py-3 w-full mt-5 text-xl cursor-pointer text-white font-semibold flex justify-center items-center gap-3"
              >
                <FcGoogle className="bg-white rounded text-2xl" /> Sign up with
                Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
