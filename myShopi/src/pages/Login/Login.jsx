import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // console.log("User logged in successfully!");
      toast.success("Logged In Successfully!", { position: "top-center" });
      navigate("/");

      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (storedUser) {
        const { email, password } = storedUser;
        // console.log("Retrieved email:", email);
        // console.log("Retrieved password:", password);
      } else {
        // console.log("User information not found in localStorage");
      }
    } catch (error) {
      // console.error("Error logging in:", error.message);
      toast.error(`Error Logging-In or Invalid Credentials`, {
        position: "top-center",
      });
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Login</h1>
      <form onSubmit={handleLogin} className={styles.form}>
        <label className={styles.label}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />

        <label className={styles.label}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />

        <button type="submit" className={styles.button}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
