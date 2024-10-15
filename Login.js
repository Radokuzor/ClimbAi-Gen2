import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";  // Import Firebase auth

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();// Prevents the default form submission behavior (page reload)
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully");// Show success message if login is successful
    } catch (err) {
      setError("Failed to login");// If login fails, set the error message
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Updates the email state when the input changes
        />
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Updates the email state when the input changes
        />
        <button type="submit">Login</button>
      </form>
      {/* If there's an error, display the error message */}
      {error && <p>{error}</p>} 
    </div>
  );
};

export default Login;
