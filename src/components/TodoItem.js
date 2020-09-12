import React from "react";
import styled from "styled-components";

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

export default TodoItem;
