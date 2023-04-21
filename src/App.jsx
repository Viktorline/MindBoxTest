import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import FormComponent from './Form';
import ListComponent from './List';
import FooterComponent from './Footer';

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

  return (
    <Container className='d-flex flex-column' style={{ border: '2px solid black' }}>
      <Row className='justify-content-center align-items-center'>
        <Col xs={12} sm={10} md={8} lg={6} xl={5}>
          <FormComponent addTodo={addTodo} />
          <ListGroup>
            <ListComponent todos={todos} switchTodo={switchTodo} />
            {todos.length > 0 ? <FooterComponent todos={todos} /> : null}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
