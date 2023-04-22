import React from 'react';
import { Row, Col, ListGroup, Button } from 'react-bootstrap';

const FooterComponent = ({ todos, filter, switchFilter, clearCompleted }) => {
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
            <Button
              variant='outline-secondary'
              active={filter === 'all'}
              size='sm'
              onClick={() => switchFilter('all')}
            >
              All
            </Button>
            <Button
              variant='outline-secondary'
              active={filter === 'active'}
              size='sm'
              onClick={() => switchFilter('active')}
            >
              Active
            </Button>
            <Button
              variant='outline-secondary'
              active={filter === 'completed'}
              size='sm'
              onClick={() => switchFilter('completed')}
            >
              Completed
            </Button>
          </div>
        </Col>
        <Col className='p-1'>
          <div className='text-secondary text-end ' onClick={clearCompleted}>
            <small className='cursor-pointer'>Clear Completed</small>
          </div>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default FooterComponent;
