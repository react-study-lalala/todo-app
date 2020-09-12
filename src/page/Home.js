import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";
import Layout from "../components/Layout";
import useInput from "../hooks/useInput";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";

const Title = styled.h1`
  text-align: center;
`;

function Home() {
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

  const isDonePage = Boolean(useRouteMatch("/done"));
  const history = useHistory();
  const location = useLocation();

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
      if (isDonePage) {
        history.push("/");
      }
    }
  };

  useEffect(() => {
    const unblock = history.block((nextLocation, action) => {
      if (nextLocation.pathname !== location.pathname && title.length > 0) {
          return window.confirm("입력을 하다 말았는데, 옮겨도 괜찮으신가요?");
      }
    });

    return () => unblock();
  });

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
          {list
            .filter((item) => item.done === isDonePage)
            .map((item, index) => (
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

export default Home;
