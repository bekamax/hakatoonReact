import React, { useEffect, useState } from "react";
import styles from "./profile.module.css";
import { API } from "../logIn/Login";
import axios from "axios";
const Profile = () => {
  const id = localStorage.getItem("currentUser");

  let dataName = null;

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);

  async function getOneUser(id) {
    console.log(id);
    if (id) {
      const { data } = await axios.get(`${API}/${id}`);
      setName(data.name);
      setEmail(data.email);
      setPhone(data.phone);
    }
  }

  useEffect(() => {
    getOneUser(id);
  }, []);
  return (
    <div className={styles.profile}>
      <div>
        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>{phone}</h1>
      </div>
    </div>
  );
};

export default Profile;
