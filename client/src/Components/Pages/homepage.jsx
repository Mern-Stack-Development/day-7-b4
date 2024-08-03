import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to the CRUD App</h1>
      <p>This is a simple application built with the MERN stack (MongoDB, Express.js, React, and Node.js). It allows you to perform basic CRUD (Create, Read, Update, Delete) operations on messages.</p>
      <h2>Features</h2>
      <ul>
        <li>Add new messages</li>
        <li>View all messages</li>
        <li>Edit existing messages</li>
        <li>Delete messages</li>
      </ul>
      <h2>Navigation</h2>
      <p>Use the links below to navigate through the application:</p>
      <ul>
        <li><Link to="/add">Add a Message</Link></li>
        <li><Link to="/">View Messages</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </div>
  );
};

export default HomePage;
