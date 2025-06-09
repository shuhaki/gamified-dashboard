import React, { useState, useEffect } from "react";

export default function StreakTracker() {
  const [streak, setStreak] = useState(() => Number(localStorage.getItem("streak")) || 0);

  useEffect(() => {
    const today = new Date().toDateString();
    const last = localStorage.getItem("lastVisit");

    if (last !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      const newStreak = last === yesterday ? streak + 1 : 1;
      setStreak(newStreak);
      localStorage.setItem("lastVisit", today);
      localStorage.setItem("streak", newStreak);
    }
  }, []);

  return <h4>🔥 Streak: {streak} day{streak !== 1 && "s"}</h4>;
}
