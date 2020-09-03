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

const Item = styled.li`
  ${(props) => props.done && "text-decoration: line-through;"}
`;

const TodoItem = function ({ id, title, done, toggle, remove }) {
  const _id = `todo-${id}`;
  return (
    <Item done={done}>
      <input
        type="checkbox"
        id={_id}
        checked={done}
        onChange={() => toggle(id)}
      />
      <label htmlFor={_id}>{title}</label>
      <button onClick={() => remove(id)}>X</button>
    </Item>
  );
};

function App() {
  const [title, setTitle] = useState("");
  const [list, setList] = useState([
    { id: 1, title: "리액트 공부하기", done: false },
    { id: 2, title: "회사 가기", done: true },
    { id: 3, title: "운동 하기", done: false },
  ]);

  const addItem = (title) => {
    if (!title) {
      window.alert("내용을 입력하세요!");
      return;
    }
    const id = list.length + 1;
    const item = { id, title, done: false };
    setList([item, ...list]);
  };

  const toggle = (id) => {
    const item = list.find((item) => item.id === id);
    item.done = !item.done;
    setList([...list]);
  };

  const remove = (id) => {
    setList([...list.filter((item) => item.id !== id)]);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onEnterInput = (e) => {
    if (e.key === "Enter") {
      addItem(title);
      setTitle("");
    }
  };

  return (
    <Layout>
      <Title>Hello Todo App</Title>
      <input
        type="text"
        placeholder="할 일..."
        value={title}
        onChange={onChangeTitle}
        onKeyPress={onEnterInput}
      />
      <button
        type="button"
        onClick={() => {
          addItem(title);
          setTitle("");
        }}
      >
        Add
      </button>
      <div>
        <TodoList>
          {list.map((item, index) => (
            <TodoItem
              key={`todo-${index}`}
              id={item.id}
              title={item.title}
              done={item.done}
              toggle={toggle}
              remove={remove}
            />
          ))}
        </TodoList>
      </div>
    </Layout>
  );
}

export default App;
