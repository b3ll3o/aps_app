import React from 'react';

import { Button, ListGroup, Col, Row } from 'react-bootstrap';

const ApresentationIncendio = ({ incendio, handleClickDelete, toggleUpdate }) => {

  return (
    <ListGroup.Item key={incendio._id}>
      <Row>
        <Col>
          <span>{incendio.latitude.$numberDecimal}</span>
        </Col>
        <Col>
          <span>{incendio.longitude.$numberDecimal}</span>
        </Col>
          <Button variant="warning" onClick={toggleUpdate}>editar</Button>
          <Button variant="danger" onClick={handleClickDelete}>deletar</Button>
      </Row>
    </ListGroup.Item>
  );
}

export default ApresentationIncendio;