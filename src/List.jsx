import { ListGroup, Form } from 'react-bootstrap';

const ListComponent = ({ todos, switchTodo }) => {
  const needOverflow = todos.length > 7;

  return (
    <div className={needOverflow ? 'overflow-auto mh-20 scrollbar scrollbar-grey' : ''}>
      <ListGroup className={needOverflow ? 'force-overflow' : ''}>
        {todos.map((todo) => (
          <ListGroup.Item key={todo.id} className='rounded-0'>
            <Form.Check
              type='checkbox'
              label={
                <span
                  className={`${
                    todo.completed ? 'text-decoration-line-through text-secondary' : ''
                  }`}
                >
                  {todo.text}
                </span>
              }
              checked={todo.completed}
              onChange={() => switchTodo(todo.id)}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ListComponent;
