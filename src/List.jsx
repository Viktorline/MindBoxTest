import { ListGroup, Button } from 'react-bootstrap';

const ListComponent = ({ todos, deleteTodo }) => {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListGroup.Item key={todo.id}>
          {todo.text}
          <Button variant='danger' className='float-right' onClick={() => deleteTodo(todo.id)}>
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListComponent;
