// Footer.js
import React from 'react';
import { Row, Col, ListGroup, Button } from 'react-bootstrap';

const FooterComponent = ({ todos }) => {
  return (
    <ListGroup.Item>
      <Row className='d-flex flex-row justify-content-between align-items-center'>
        <Col className='p-1'>
          <div className='text-secondary'>
            <small>{`${todos.length} items left`}</small>
          </div>
        </Col>
        <Col>
          <div className='d-flex btn-group'>
            <Button variant='outline-secondary' size='sm'>
              All
            </Button>
            <Button variant='outline-secondary' size='sm'>
              Active
            </Button>
            <Button variant='outline-secondary' size='sm'>
              Completed
            </Button>
          </div>
        </Col>
        <Col className='p-1'>
          <div className='text-secondary text-end'>
            <small>Clear Completed</small>
          </div>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default FooterComponent;
