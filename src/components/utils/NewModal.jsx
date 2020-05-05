import React from 'react';
import { Modal } from 'semantic-ui-react';

const NewModal = ({ children, open, handleCloseModal, headerMessage }) => {
  return (
    <Modal closeIcon open={open} onClose={handleCloseModal}>
      <Modal.Header>{headerMessage}</Modal.Header>
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
};

export default NewModal;
