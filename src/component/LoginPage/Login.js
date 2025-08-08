import { Link } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function submitValues() {}
  return (
    <section>
      {/* Background grid spans */}
      {Array.from({ length: 300 }).map((_, i) => (
        <span key={i}></span>
      ))}

      {/* Sign In Form */}
      <div className="signin">
        <div className="content">
          <h2>Sign In</h2>
          <div className="form">
            <div className="inputBox">
              <input type="text" required />
              <i>Email or Username</i>
            </div>
            <div className="inputBox">
              <input type="password" required />
              <i>Password</i>
            </div>
            <div className="links">
              <a href="#">Forgot Password</a>
              <Link to="/signup">Signup</Link>
            </div>
            <div className="inputBox">
              <input type="submit" value="Login" onClick={submitValues()} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
