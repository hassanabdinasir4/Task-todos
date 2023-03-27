

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';

const Home = () => {
  return (
    <div>
      <Container fluid className="bg-primary text-white py-5">
        <Row>
          <Col md={6}>
            <h1 className="display-4">Todo App</h1>
            <p className="lead">
              A simple app to help you manage your tasks and get things done.
            </p>
            <Link to="/todolist">
              <Button color="light">View Todo List</Button>
            </Link>
          </Col>
          <Col md={6}>
            <img src="https://media.istockphoto.com/id/924555992/photo/businesspersons-hand-writing-schedule-in-diary-with-pen.jpg?s=612x612&w=0&k=20&c=iMF2Ahh5bDSUpyHPlpObCsC6aa_hlXHjKhU6gOBTo0w=" alt="Todo App" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Row>
          <Col>
            <h2>Features</h2>
            <ul>
              <li>Simple and intuitive user interface</li>
              <li>Add, update and delete Todo items</li>
              <li>Filter Todo items by date, priority and status</li>
            </ul>
          </Col>
          <Col>
            <h2>About</h2>
            <p>
              This Todo app was built with React and Bootstrap. It allows users
              to add, update and delete tasks, and filter them by date, priority
              and status.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
