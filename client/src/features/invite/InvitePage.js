import React, { useEffect, useState } from "react";
import axios from "axios";
import InviteCard from "./InviteCard";
import { FaCheck, FaTimes } from "react-icons/fa";
// import { setGoingCount, setNotGoingCount, setPerson } from "./inviteSlice";

export default function InvitePage() {
  const [person, setPerson] = useState({});
  const [goingCount, setGoingCount] = useState(0);
  const [notGoingCount, setNotGoingCount] = useState(0);

  function fetchUser() {
    axios.get("/user").then((resp) => {
      console.log(resp.data);
      const { user, goingCount, notGoingCount } = resp.data;
      setGoingCount(goingCount);
      setNotGoingCount(notGoingCount);
      setPerson(user);
    });
  }

  function markAsGoing(user) {
    const newUser = { ...user, going: true };
    axios.post("/mark-invitee", newUser).then((resp) => {
      fetchUser();
    });
  }
  function markAsNotGoing(user) {
    const newUser = { ...user, going: false };
    axios.post("/mark-invitee", newUser).then((resp) => {
      fetchUser();
    });
  }

  useEffect(() => {
    axios.get("/user").then((resp) => {
      console.log(resp.data);
      const { user, goingCount, notGoingCount } = resp.data;
      setGoingCount(goingCount);
      setNotGoingCount(notGoingCount);
      setPerson(user);
    });
  }, []);
  console.log(person);
  return (
    <div>
      <div>
        <span>Going: {goingCount}</span>
        <span>Not Going: {notGoingCount}</span>
      </div>
      <InviteCard user={person}>
        <div className="invite-actions">
          <button
            className="invite-btn invite-btn-deny"
            onClick={() => markAsNotGoing(person)}
          >
            <FaTimes />
          </button>
          <button
            className="invite-btn invite-btn-approve"
            onClick={() => markAsNotGoing(person)}
          >
            <FaCheck />
          </button>
        </div>
      </InviteCard>
      {/* {person.name.first} */}
    </div>
  );
}
