import { ListGroup, Form } from 'react-bootstrap';

const ListComponent = ({ todos, switchTodo }) => {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListGroup.Item key={todo.id}>
          <Form.Check
            type='checkbox'
            inline
            label={todo.text}
            className='mr-2'
            checked={todo.completed}
            onChange={() => switchTodo(todo.id)}
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListComponent;
