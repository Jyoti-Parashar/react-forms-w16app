import { Button, Modal } from "react-bootstrap";

import { FC } from "react";

interface DeleteUserModalProps {
  deleteUser: () => void;
  show: boolean;
  onClose: () => void;
}

const DeleteUserModal: FC<DeleteUserModalProps> = ({
    deleteUser,
  show,
  onClose,
}) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete User</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this User?!?!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="danger" onClick={deleteUser}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteUserModal;