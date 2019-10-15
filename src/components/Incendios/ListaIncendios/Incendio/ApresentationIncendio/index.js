import React from 'react';

import { Button, ListGroup } from 'react-bootstrap';

const ApresentationIncendio = ({ incendio, handleClickDelete, toggleUpdate }) => {

  return (
    <ListGroup.Item key={incendio._id}>
      <span>{incendio.latitude.$numberDecimal} - </span>
      <span>{incendio.longitude.$numberDecimal}</span>
      <Button variant="warning" onClick={toggleUpdate}>editar</Button>
      <Button variant="danger" onClick={handleClickDelete}>deletar</Button>
    </ListGroup.Item>
  );
}

export default ApresentationIncendio;