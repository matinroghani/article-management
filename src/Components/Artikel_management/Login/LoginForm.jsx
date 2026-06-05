import { Link } from "react-router-dom";
import styles from "./Login.module.css";

export default function LoginForm({user, setUser, password, setPassword, handleOnSubmit}) {
  return (
    <>
      <form className={styles.loginBox} onSubmit={handleOnSubmit}>
        <h2>ورود به حساب</h2>

        <div className={styles.inputGroup}>
          <input
            type="text"
            onChange={(e) => {
              setUser(e.target.value);
            }}
            required
            value={user}
          />
          <label>نام کاربری</label>
        </div>

        <div className={styles.inputGroup}>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            required
          />
          <label>رمز عبور</label>
        </div>

        <button type="submit">ورود</button>

        <p className={styles.footerText}>
          حساب ندارید؟ 
          <Link to="/sign-up">
          ثبت‌نام
          </Link>
        </p>
      </form>
    </>
  );
}
