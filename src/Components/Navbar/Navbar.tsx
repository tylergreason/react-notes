import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkList = styled.ul`
  display: flex; 
  flex-flow: column;
  padding: 1rem;
  background-color: purple;
  & a {
    color: white;
    text-decoration: none;
  }
  max-width: 10vw;
  border-radius: 10px;
`

export default function Navbar() {
  return (
    <LinkList>
      <Link to="/">Notes</Link>
      <Link to="/about">About</Link>
    </LinkList>
  )
}