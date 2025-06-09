import React, { useState, useEffect } from "react";

export default function MoodCheckin() {
  const [mood, setMood] = useState(() => localStorage.getItem("mood") || "");

  const handleMood = (emoji) => {
    setMood(emoji);
    localStorage.setItem("mood", emoji);
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <h4>Today's Mood: {mood || "Not set"}</h4>
      {["😊","😐","😔"].map((e) => (
        <button key={e} onClick={() => handleMood(e)}>{e}</button>
      ))}
    </div>
  );
}

