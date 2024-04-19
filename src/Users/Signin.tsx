import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
export default function Signin() {
  const [credentials, setCredentials] = useState<User>({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "USER",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const signin = async () => {
    try {
      await client.signin(credentials);
    } catch (error: any) {
      setError("Invalid credentials");
      return;
    }
    navigate("/Kanbas/Account/Profile");
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button
        onClick={() => navigate("/Kanbas/Account/Signup")}
        className="btn"
      >
        Sign Up
      </button>
      <br />
      {error && <div className="alert alert-danger mt-2">{error}</div>}
      <label>Username</label>
      <input
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        className="form-control w-25"
      />
      <label>Password</label>
      <input
        type="password"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        className="form-control w-25 mt-2"
      />
      <button onClick={signin} className="btn btn-primary mt-2">
        {" "}
        Sign In{" "}
      </button>
    </div>
  );
}
