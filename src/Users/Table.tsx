import React, { useState, useEffect } from "react";
import { BsTrash3Fill, BsPlusCircleFill } from "react-icons/bs";
import * as client from "./client";
import { User } from "./client";
export default function UserTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "USER",
  });
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
      setUser({
        _id: "",
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        role: "USER",
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h1>User Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
          <tr>
            <td>
              <input
                value={user.username}
                placeholder="Username"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                className="form-control"
                required={true}
              />
              <input
                type="password"
                value={user.password}
                placeholder="Password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required={true}
                className="form-control"
              />
            </td>
            <td style={{ verticalAlign: "top" }}>
              <input
                value={user.firstName}
                placeholder="First Name"
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
                className="form-control"
              />
            </td>
            <td style={{ verticalAlign: "top" }}>
              <input
                value={user.lastName}
                placeholder="Last Name"
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                className="form-control"
              />
            </td>
            <td style={{ verticalAlign: "top" }}>
              <select
                value={user.role}
                onChange={(e) => setUser({ ...user, role: e.target.value })}
                className="form-control"
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td style={{ verticalAlign: "top", textAlign: "center" }}>
              <BsPlusCircleFill
                onClick={createUser}
                className="text-success fomr-control"
                style={{ fontSize: "2em", cursor: "pointer" }}
              />
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
