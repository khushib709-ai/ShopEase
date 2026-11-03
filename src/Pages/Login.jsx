import { useState } from "react";
import "../css/Login.css";

function Login({ setCurrentPage }) {
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const message = isLogin
      ? `Welcome back! Logged in as ${email}`
      : `Account created successfully for ${name}!`;

    setStatusMessage(message);

    setTimeout(() => {
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      if (setCurrentPage) {
        setCurrentPage("home");
      }
    }, 1200);
  }

  return (
    <section className="login-page">
      <div className="login-container">
        <h2>{isLogin ? "Welcome Back!" : "Create Account"}</h2>

        <p className="login-subtitle">
          {isLogin
            ? "Log in to your ShopEase account"
            : "Sign up to start shopping on ShopEase"}
        </p>

        {statusMessage && (
          <div className="login-success-banner">
            {statusMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          {!isLogin && (
            <div className="form-group">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password (min 6 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="6"
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength="6"
              />
            </div>
          )}

          <button type="submit" className="login-submit-btn">
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <p className="switch-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            className="switch-link"
            onClick={() => {
              setIsLogin(!isLogin);
              setStatusMessage("");
            }}
            role="button"
            tabIndex={0}
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </div>
    </section>
  );
}

export default Login;
