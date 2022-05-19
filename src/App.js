import { useState } from "react";
import React from "react";
import "./App.css";
import Navbar from "./navbar/navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <h2 data-tag="create-issue-header">Create Issue</h2>
    </div>
  );
}

export default App;
