import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TodoForm from './TodoForm';

function TodoPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://example.com/todos')
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.log(error));
  }, []);

  const handleDelete = id => {
    fetch(`https://example.com/todos/${id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(data => setTodos(todos.filter(todo => todo.id !== id)))
      .catch(error => console.log(error));
  };

  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <h1>Todo List</h1>
        </Col>
        <Col>
          <TodoForm />
        </Col>
      </Row>
      <Row>
        <Col>
          <ul className="list-group mt-3">
            {todos.map(todo => (
              <li key={todo.id} className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5>{todo.title}</h5>
                    <p>{todo.description}</p>
                    <span className={`badge badge-${todo.priority === 'high' ? 'danger' : 'info'}`}>{todo.priority}</span>
                  </div>
                  <Button variant="danger" onClick={() => handleDelete(todo.id)}>Delete</Button>
                </div>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default TodoPage;