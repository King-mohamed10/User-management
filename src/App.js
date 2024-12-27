
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import UserDetail from "./pages/UserDetail";
import EditUser from "./pages/EditUser";
import './App.css'



function App() {
  const [users, setUsers] = useState([]);
      useEffect(() => {
          fetch("https://jsonplaceholder.typicode.com/users")
              .then((response) => response.json())
              .then((data) => setUsers(data));
      }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home users={users} setUsers={setUsers}/>} />
        <Route path="/user/:id" element={<UserDetail users={users} />} />
        <Route path="/user/:id/edit" element={<EditUser users={users} setUsers={setUsers}/>} />
      </Routes>
    </Router>
  );
}
export default App;