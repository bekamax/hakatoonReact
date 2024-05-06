import React, { useState } from "react";
import styles from "./registor.module.css";
import Button from "../../ui/buttons/Button";
import { Link } from "react-router-dom";
import { Input } from "../../ui/input/Input";
const Registor = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    password_confirm: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }
  console.log(user);
  return (
    <div className={styles.registor}>
      <form>
        <p>Регистрация</p>
        {Object.keys(user).map((item, index) => (
          <div key={index}>
            <Input
              placeholder={item}
              name={item}
              onChange={handleChange}
              value={user.item}
            />
          </div>
        ))}
        <div className={styles.btn}>
          <Button>hello</Button>
          <Link to={"/login"}>У вас есть аккаунт?</Link>
        </div>
      </form>
    </div>
  );
};

export default Registor;
