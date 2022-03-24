import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Homepage from "../homepage/homepage.component";
import CreateCharacter from "../create-character/create-character.component";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/create" element={<CreateCharacter />} />
      </Routes>
    </div>
  );
}

export default Navbar;
