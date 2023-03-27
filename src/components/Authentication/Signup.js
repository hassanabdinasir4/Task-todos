import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    // Create a new user object
    const user = { username, email, password };

    // Send a POST request to the server
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    .then(response => {
      // Handle successful registration
      if (response.ok) {
        setRegistrationSuccess(true);
      }
    })
    .catch(error => {
      // Handle registration error
      console.error(error);
    });
  }

  return (
    <div className="container mt-5">
      <h1>Thank you for Signing Up</h1>
      {registrationSuccess ? (
        <>
          <p>Registration successful. Please <Link to="/login">log in</Link>.</p>
        </>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">Register</Button>
        </Form>
      )}
    </div>
  );
}

export default Register;
