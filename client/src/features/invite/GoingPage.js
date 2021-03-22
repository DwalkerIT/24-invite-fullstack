import React, { useState, useEffect } from "react";
import axios from "axios";
import InviteCard from "./InviteCard";

export default function goingPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("/going").then((resp) => {
      setPerson(resp.data);
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
