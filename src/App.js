import React, { useState } from "react";
import styled from "styled-components";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import useInput from "./hooks/useInput";

const Layout = styled.div`
  margin: 0 auto;
  max-width: 375px;
`;

const Title = styled.h1`
  text-align: center;
`;

function App() {
  const {
    state: title,
    setState: setTitle,
    onChange: onChangeTitle,
  } = useInput("");

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
