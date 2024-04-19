import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
export default function Signup() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(user);
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      setError(err?.response?.data?.message);
      setUser({ username: "", password: "" });
    }
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <button
        onClick={() => navigate("/Kanbas/Account/Signin")}
        className="btn"
      >
        Sign In
      </button>
      <br />
      {error && <div className="alert alert-danger">{error}</div>}
      <label>Username</label>
      <input
        value={user.username}
        onChange={(e) =>
          setUser({
            ...user,
            username: e.target.value,
          })
        }
        className="form-control w-25"
        placeholder="Enter a username"
      />
      <label>Password</label>
      <input
        type="password"
        value={user.password}
        onChange={(e) =>
          setUser({
            ...user,
            password: e.target.value,
          })
        }
        className="form-control w-25 mt-2"
        placeholder="Enter a password"
      />
      <button onClick={signup} className="btn btn-primary mt-2">
        {" "}
        Sign Up{" "}
      </button>
    </div>
  );
}
