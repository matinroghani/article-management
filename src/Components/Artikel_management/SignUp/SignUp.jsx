import styles from "./SignUp.module.css"
import SignUpForm from "./SignUpForm";
export default function SignUp() {
  return (
    <>
      <div className={styles.containerWrapper}>
        <SignUpForm/>
      </div>
    </>
  );
}
