import React, { useState } from "react";
import styles from "./login.module.css";
import { Input } from "../../ui/input/Input";
import Button from "../../ui/buttons/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const API = "http://localhost:8000/users";
  function logInUsers() {
    const { data } = axios(API);
    console.log(data);
  }
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    for (let key in user) {
      if (!user[key]) {
        alert("Some inputs are empty!");
        return;
      }
    }
    logInUsers();
    setUser({ email: "", password: "" });
  }

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  console.log(user);
  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }
  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit}>
        <p>Регистрация</p>
        {Object.keys(user).map((item, index) => (
          <div key={index}>
            <Input
              placeholder={item}
              name={item}
              onChange={handleChange}
              value={user[item]}
            />
          </div>
        ))}
        <div className={styles.btn}>
          <Button>hello</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
