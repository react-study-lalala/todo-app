import React, { useState } from "react";
import styled from "styled-components";
const Layout = styled.div`
  margin: 0 auto;
  max-width: 375px;
`;

const Title = styled.h1`
  text-align: center;
`;

const TodoList = styled.ul`
  margin: 0;
  padding: 0;
  & li {
    list-style: none;
  }
`;

const TodoItem = function ({ id, title, done, toggle }) {
  return (
    <li>
      <input
        type="checkbox"
        id={id}
        checked={done}
        onChange={() => toggle(id)}
      />
      <label htmlFor={id}>{title}</label>
    </li>
  );
};

function App() {
  const [list, setList] = useState([
    { id: 1, title: "리액트 공부하기", done: false },
    { id: 2, title: "회사 가기", done: true },
    { id: 3, title: "운동 하기", done: false },
  ]);

  const toggle = (id) => {
    const item = list.find((item) => item.id === id);
    item.done = !item.done;
    setList([...list]);
  };

  return (
    <Layout>
      <Title>Hello Todo App</Title>
      <div>
        <TodoList>
          {list.map((item, index) => (
            <TodoItem
              key={`todo-${index}`}
              id={item.id}
              title={item.title}
              done={item.done}
              toggle={toggle}
            />
          ))}
        </TodoList>
      </div>
    </Layout>
  );
}

export default App;
