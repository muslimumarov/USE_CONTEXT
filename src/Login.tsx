import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Login = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState<"user" | "employee">("user");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = () => {
    login({ name, role });
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select onChange={(e) => setRole(e.target.value as "user" | "employee")}>
        <option value="user">User</option>
        <option value="employee">Employee</option>
      </select>
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
