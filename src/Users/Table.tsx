import React, { useState, useEffect } from "react";
import {
  BsTrash3Fill,
  BsPlusCircleFill,
  BsFillCheckCircleFill,
  BsPencil,
} from "react-icons/bs";
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
  const deleteUser = async (user: User) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };
  const selectUser = async (user: User) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
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
  const [role, setRole] = useState("USER");
  const fetchUsersByRole = async (role: string) => {
    const users = await client.findUsersByRole(role);
    setRole(role);
    setUsers(users);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User Table</h1>
      <select
        onChange={(e) => fetchUsersByRole(e.target.value)}
        value={role || "USER"}
        className="form-control w-25 float-end"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
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
                className="form-control mt-1"
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
              <BsFillCheckCircleFill
                onClick={updateUser}
                className="me-2 text-success"
                style={{ fontSize: "2em", cursor: "pointer" }}
              />
              <BsPlusCircleFill
                onClick={createUser}
                className="text-success"
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
              <td style={{ textAlign: "center" }}>
                <button
                  onClick={() => deleteUser(user)}
                  style={{ border: "none", backgroundColor: "transparent" }}
                >
                  <BsTrash3Fill
                    className="text-danger"
                    style={{ fontSize: "1.25em" }}
                  />
                </button>
                <button
                  onClick={() => selectUser(user)}
                  className="btn btn-warning me-2"
                  style={{ border: "none", backgroundColor: "transparent" }}
                >
                  <BsPencil
                    className="text-primary"
                    style={{ fontSize: "1.25em" }}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
