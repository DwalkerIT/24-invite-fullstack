import React, { useState, useEffect } from "react";
import axios from "axios";
import InviteCard from "./InviteCard";
// import { setPerson } from "./inviteSlice";

export default function NotGoingPage() {
  const [person, setPerson] = useState({ name: {} });
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("/notgoing").then((resp) => {
      setUsers(resp.data);
    });
  }, []);
  return (
    <div className="user-grid">
      {users.map((user) => (
        <InviteCard user={user} />
      ))}
    </div>
  );
}
