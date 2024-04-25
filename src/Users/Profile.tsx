import * as client from "./client";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
export default function Profile() {
  const [profile, setProfile] = useState({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    role: "USER",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchProfile = async () => {
    try {
      const account = await client.profile();
      setProfile(account);
      setError("");
    } catch (error: any) {
      setError("User not found");
    }
  };
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser({ _id: "", username: "", email: "", role: "" }));
    localStorage.removeItem("currentUser");
    navigate("/Kanbas/Account/Signin");
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  const save = async () => {
    await client.updateUser(profile);
  };

  return (
    <div>
      <h1>Profile</h1>
      <Link to="/Kanbas/Account/Admin/Users" className="btn btn-warning w-100">
        Users
      </Link>
      {error && <div className="alert alert-danger mt-2">{error}</div>}
      {profile && !error && (
        <div>
          <h3>Edit Profile</h3>
          <label>Username</label>
          <input
            value={profile.username}
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
            className="form-control w-25"
          />
          <label>Password</label>
          <input
            value={profile.password}
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
            className="form-control w-25 mt-2"
          />
          <label>First Name</label>
          <input
            value={profile.firstName}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
            className="form-control w-25 mt-2"
          />
          <label>Last Name</label>
          <input
            value={profile.lastName}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
            className="form-control w-25 mt-2"
          />
          <label>Date of Birth</label>
          <input
            value={
              profile.dob &&
              new Date(profile.dob)?.toISOString()?.split("T")?.[0]
            }
            type="date"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
            className="form-control w-25 mt-2"
          />
          <label>Email</label>
          <input
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            className="form-control w-25 mt-2"
          />
          <label>Role</label>
          <select
            value={profile.role}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            className="form-control w-25 mt-2"
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button onClick={save} className="btn btn-primary mt-2 w-25">
            Save
          </button>
          <br />
          <button onClick={signout} className="btn btn-danger mt-2 w-25">
            Sign Out
          </button>
        </div>
      )}
      {!profile && <h4>User not found</h4>}
    </div>
  );
}
