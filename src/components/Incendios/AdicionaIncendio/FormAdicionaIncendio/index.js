import React from 'react';

import { Button, Form, Col, Row } from 'react-bootstrap';

const FormAdicionaIncendio = ({ changeAdd, setLatitude, setLongitude, setSubmited }) => {

  const handleSubmit = event => {
    event.preventDefault();
    changeAdd();
    setSubmited(true);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Control placeholder="latitude" onChange={e => setLatitude(e.target.value)}></Form.Control>
          </Col>
          <Col>
            <Form.Control placeholder="longitude" onChange={e => setLongitude(e.target.value)}></Form.Control>
          </Col>
          <Col>
            <Button variant="success" type="submit">adicionar</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default FormAdicionaIncendio;