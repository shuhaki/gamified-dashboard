import React from "react";
import XPTracker from "./XPTracker";
import StreakTracker from "./StreakTracker";
import MoodCheckin from "./MoodCheckin";
import Journal from "./Journal";

export default function Dashboard({ user }) {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <button onClick={handleLogout} style={{ float: "right", background:"#dc3545" }}>Logout</button>
      <XPTracker />
      <StreakTracker />
      <MoodCheckin />
      <Journal />
    </div>
  );
}

