import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const UpdateTodo = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');

  useEffect(() => {
    // make API call to get the todo item with the specified ID
    fetch(`https://example.com/api/todos/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTodo(data);
        setTitle(data.title);
        setDescription(data.description);
        setStatus(data.status);
        setPriority(data.priority);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // make API call to update the todo item with the new values
    fetch(`https://todo-app-odjv.onrender.com/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title: title,
        description: description,
        status: status,
        priority: priority,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // redirect to the Todo list page
        window.location.href = '/todolist';
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h3>Update Todo</h3>
          <hr />
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="textarea"
                name="description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="status">Status</Label>
              <Input
                type="select"
                name="status"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Select status</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="priority">Priority</Label>
              <Input
                type="select"
                name="priority"
                id="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="">Select priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </Input>
              </FormGroup>
            <Button color="primary">Update Todo</Button>
            <Button color="secondary" className="ml-3" onClick={() => window.history.back()}>Cancel</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default UpdateTodo;
