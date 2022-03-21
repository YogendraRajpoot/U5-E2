import React, { useState } from "react";
import { EmployeeInput } from "./EmployeeInput";
import { EmployeeList } from "./EmployeeList";
import style from "./Employee.module.css"


export const Employee = () => {
  const [data, setData] = useState([]);

  return (
    <div className={style.container}>
      <div className={style.nav}>
        <h1>Employee DETAIL</h1>
      </div>
      <div className={style.second}>
        <EmployeeInput data={data} setData={setData}  />
        <EmployeeList data={data} setData={setData} />
      </div>
    </div>
  );
};
