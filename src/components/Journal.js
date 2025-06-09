import React, { useState } from "react";

export default function Journal() {
  const today = new Date().toDateString();
  const key = `journal-${today}`;
  const [entry, setEntry] = useState(() => localStorage.getItem(key) || "");

  const handleChange = (e) => {
    setEntry(e.target.value);
    localStorage.setItem(key, e.target.value);
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <h4>Journal ({today})</h4>
      <textarea 
        rows="4" 
        value={entry} 
        onChange={handleChange} 
        placeholder="Write your thoughts..." 
      />
    </div>
  );
}

