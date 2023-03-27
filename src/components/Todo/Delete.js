import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeleteTodo = () => {
  const { id } = useParams();
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleDelete = () => {
    // make API call to delete the todo item with the specified ID
    fetch(`https://todo-app-odjv.onrender.com/todos/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // redirect to the Todo list page
        window.location.href = '/todos';
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h3>Delete Todo</h3>
          <hr />
          <Button color="danger" onClick={toggle}>
            Delete Todo
          </Button>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Delete Todo</ModalHeader>
            <ModalBody>
              Are you sure you want to delete this Todo?
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={handleDelete}>
                Yes
              </Button>{' '}
              <Button color="secondary" onClick={toggle}>
                No
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default DeleteTodo;
