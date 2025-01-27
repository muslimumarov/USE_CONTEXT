import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div>
        Please log in
        <button>
          <Link to="/login">Go to Login</Link>
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      {user.role === "user" ? (
        <p>This is the user  dashboard</p>
      ) : (
        <p>This is the employee dashboard</p>
      )}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
