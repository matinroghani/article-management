import { useState } from "react";
import styles from "./Login.module.css";
import { users } from "./Users";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { ArtikelManagementContext } from "../ArtikelManagementContext";

export default function Login({ successLogIn }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loginAttempts, setLoginAttemps] = useState(0);
  const navigate = useNavigate()
  const {isUserLoggedIn} = useState(ArtikelManagementContext)

  function handleOnSubmit(e) {
    e.preventDefault();
    const foundAdmin = users.find(
      (admin) => admin.userName === user && admin.password === password,
    );
    if (foundAdmin) {
      console.log("logined!");
      successLogIn(foundAdmin.userName)
      navigate("/dashboard")
    } else {
      setLoginAttemps(() => loginAttempts + 1);
      console.log(`wrong pass or user! ${loginAttempts} times `);
    }
  }
  return (
    <>
      {loginAttempts < 3 ? (
        <div className={styles.containerWrapper}>
          <LoginForm
            user={user}
            setUser={setUser}
            password={password}
            setPassword={setPassword}
            handleOnSubmit={handleOnSubmit}
          />
        </div>
      ) : (
        <p className={styles.BanedMessage}> دسترسی به اکانت موقتا مسدود شد! </p>
      )}
      { isUserLoggedIn  ? <p> </p> : <p>شما لاگین نیستید</p> }
    </>
  );
}
