import { Link } from "react-router-dom";
import styles from "./SignUp.module.css"

export default function SignUpForm() {

  return (
    <>
      <form className={`${styles.loginBox} ${styles.signupBox}`}>
        <h2>ثبت نام</h2>

        <div className={styles.inputGroup}>
          <input type="text" required />
          <label>نام و نام خانوادگی</label>
        </div>

        <div className={styles.inputGroup}>
          <input type="email" required />
          <label>ایمیل</label>
        </div>

        <div className={styles.inputGroup}>
          <input type="text" required />
          <label>نقش</label>
        </div>

        <div className={styles.inputGroup}>
          <input type="password" required />
          <label>رمز عبور</label>
        </div>

        <div className={styles.inputGroup}>
          <input type="password" required />
          <label>تکرار رمز عبور</label>
        </div>

        <button type="submit">ثبت نام</button>

        <p className={styles.footerText}>
          حساب کاربری دارید؟ <Link to="/">ورود</Link>
        </p>
      </form>
    </>
  );
}
