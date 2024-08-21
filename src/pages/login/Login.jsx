import React from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { useGetValue } from "../../hooks/useGetValue";
import { useDispatch } from "react-redux";
import { setToken } from "../../context/slice/authSlice";

const initialState = {
  username: "aziz04",
  password: "12345678",
};

const Login = () => {
  const navigate = useNavigate();
  const { formData, handleChange } = useGetValue(initialState);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username === "aziz04" && formData.password === "12345678") {
      dispatch(setToken("token"));

      navigate("/admin");
    } else {
      toast.error("Parol yoki username xato");
    }

    console.log(formData);
  };
  return (
    <div className="login">
      <div className="container login__container">
        <form onSubmit={handleSubmit} className="login__form">
          <h2>Sign in</h2>
          <label htmlFor="username">
            <span>Username</span>
            <input
              value={formData.username}
              onChange={handleChange}
              name="username"
              placeholder="Your username or email address"
              type="text"
            />
          </label>
          <label htmlFor="password">
            <span>Password</span>
            <input
              value={formData.password}
              onChange={handleChange}
              name="password"
              placeholder="Password"
              type="password"
            />
          </label>
          <button>Send</button>
          <div className="login__register">
            <p>Agar royxatdan otmagan bo'lsangiz!</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
