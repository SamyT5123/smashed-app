import React from "react";
import { ReactDOM } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export function NavBar() {
  return (
    <div className="navBar">
      <ul>
        <li>
          <Link to="/" style={{}}>Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        
      </ul>
    </div>
  );
}
