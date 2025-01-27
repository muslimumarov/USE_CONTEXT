import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Login = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState<"user" | "employee" | "user2" | "user3">("user");
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
      <select onChange={(e) => setRole(e.target.value as "user" | "employee" | "user2" | "user3")}>
        <option value="user">User</option>
        <option value="employee">Employee</option>
        <option value="user2">user2</option>
        <option value="user3">user3</option>
      </select>
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
