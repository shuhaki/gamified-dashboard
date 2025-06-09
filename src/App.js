import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(savedUser);
  }, []);

  return <div className="App">{user ? <Dashboard user={user} /> : <Login onLogin={setUser} />}</div>;
}

export default App;


