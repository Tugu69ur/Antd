import { useContext, useState } from "react";
import auth from "../../api/auth";
import { AuthContext } from "../../context/AuthContext";

const LoginPage = () => {
  const [, dispatch] = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await auth.login({ email, password });
      auth.saveToken(response.token);
      dispatch({ type: "LOGIN", payload: response.user });
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
