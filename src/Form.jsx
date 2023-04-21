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
      <div className='input-group'>
        <Form.Control
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='What needs to be done?'
        />
        <Button variant='secondary' type='submit'>
          Add
        </Button>
      </div>
    </Form>
  );
};

export default FormComponent;
