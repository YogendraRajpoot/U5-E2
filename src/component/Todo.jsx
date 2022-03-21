import React, { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import style from "./Todo.module.css"


export const Todo = () => {
  const [data, setData] = useState([]);

  return (
    <div className={style.container}>
      <div className={style.nav}>
        <h1>TODO</h1>
      </div>
      <div className={style.second}>
        <TodoInput data={data} setData={setData}  />
        <TodoList data={data} />
      </div>
    </div>
  );
};
