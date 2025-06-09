import React, { useState, useEffect } from "react";
import RewardPopup from "./RewardPopup";

export default function XPTracker() {
  const [xp, setXp] = useState(() => Number(localStorage.getItem("xp")) || 0);
  const [showReward, setShowReward] = useState(false);

  const level = Math.floor(xp / 100);
  const progress = xp % 100;

  useEffect(() => {
    localStorage.setItem("xp", xp);
    if (progress === 0 && xp !== 0) {
      setShowReward(true);
      setTimeout(() => setShowReward(false), 2500);
    }
  }, [xp]);

  return (
    <div style={{ margin: "20px 0" }}>
      <h3>Level: {level}</h3>
      <p>XP: {xp}</p>
      <div style={{ background: "#e0e0e0", borderRadius: "8px", overflow: "hidden" }}>
        <div 
          style={{ width: `${progress}%`, height: "12px", background: "#28a745" }} 
        />
      </div>
      <button onClick={() => setXp((prev) => prev + 10)}>Gain +10 XP</button>
      {showReward && <RewardPopup />}
    </div>
  );
}

