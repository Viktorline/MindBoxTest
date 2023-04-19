import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const FormComponent = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    addTodo({
      id: Date.now(),
      text,
      completed: false,
    });
    setText('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='todoForm'>
        <Form.Label>Enter a new to-do item:</Form.Label>
        <Form.Control
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Enter a new to-do item'
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Add
      </Button>
    </Form>
  );
};

export default FormComponent;
