import { Container, Row, Col } from 'react-bootstrap';
import FormComponent from './Form';
import ListComponent from './List';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <FormComponent addTodo={addTodo} />
          <ListComponent todos={todos} deleteTodo={deleteTodo} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
