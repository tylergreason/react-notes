import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <ul>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </ul>
  )
}