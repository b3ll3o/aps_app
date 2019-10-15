import React from 'react';

import { Button, Form, Row, Col } from 'react-bootstrap';

const UpdateIncendio = ({ handleClickUpdate, incendio, setLatitude, setLongitude }) => {

  return (
    <div>
      <Form onSubmit={handleClickUpdate}>
        <Row>
          <Col>
          <Form.Control placeholder={incendio.latitude.$numberDecimal}
              onChange={e => setLatitude(e.target.value)}></Form.Control>
          </Col>
          <Col>
            <Form.Control
              placeholder={incendio.longitude.$numberDecimal}
              onChange={e => setLongitude(e.target.value)}></Form.Control>
          </Col>
          <Button variant="success" type="submit">editar</Button>
        </Row>
      </Form>
    </div>
  );
}

export default UpdateIncendio;