import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import FormComponent from './Form';
import Logo from './Logo';
import ListComponent from './List';
import FooterComponent from './Footer';

import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const switchTodo = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const switchFilter = (filterType) => {
    setFilter(filterType);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const clearCompleted = () => {
    if (filter === 'completed') setFilter('all');
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <Container className='d-flex flex-column'>
      <Logo />
      <Row className='justify-content-center align-items-center'>
        <Col xs={12} sm={10} md={8} lg={6} xl={5}>
          <FormComponent addTodo={addTodo} />
          <ListGroup>
            <ListComponent todos={filteredTodos} switchTodo={switchTodo} />
            {todos.length > 0 ? (
              <FooterComponent
                todos={todos}
                filter={filter}
                switchFilter={switchFilter}
                clearCompleted={clearCompleted}
              />
            ) : null}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
