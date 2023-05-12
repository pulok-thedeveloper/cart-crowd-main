import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        navigate("/dashboard");

    }

  return (
    <div className="grid place-items-center min-h-screen">
      <div className="bg-secondary w-[400px]">
        <form onSubmit={handleSubmit} className="signup-form p-10">
          <div className="grid gap-5">
            <div className="flex flex-col form-control gap-2">
              <label>Email</label>
              <input
                className="w-full p-4"
                type="email"
                name="email"
                placeholder="Enter email address"
              />
            </div>
            <div className="flex flex-col form-control gap-2">
              <label>Password</label>
              <input
                className="w-full p-4"
                name="password"
                type="password"
                placeholder="Enter a strong password"
              />
            </div>
            <div className="form-control mt-5">
              <input
                className="signup-btn w-full p-3"
                type="submit"
                value="Login"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
