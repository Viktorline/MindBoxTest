import { Container, Row, Col } from 'react-bootstrap';
import FormComponent from './Form';
import ListComponent from './List';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const switchTodo = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };
  console.log(todos);
  return (
    <Container className='my-4'>
      <Row
        className='justify-content-center align-items-center'
        // style={{ border: '2px solid black' }}
      >
        <Col md={6}>
          <FormComponent addTodo={addTodo} />
          <ListComponent todos={todos} switchTodo={switchTodo} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
