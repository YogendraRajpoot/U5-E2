import React from "react";
import style from "./EmployeeList.module.css";

export const EmployeeList = ({ data }) => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <h1>EMPLOYEE LIST</h1>
        <div className={style.category}>
          <button onClick={()=>{
            {data.map((item) => {
              return (
                <>
                  <div className={style.element} key={item.id}>
                    <ul>
                      <li>Name: {item.name}</li>
                      <li>Gender : {item.gender}</li>
                      <li>Role : {item.role}</li>
                      <li>Department :{item.department}</li>
                      <li>Salary :{item.salary}</li>
                    </ul>
                  </div>
                </>
              );
            })}
          }}>Show All Department </button>
          <button>Show Marketing</button>
          <button>Show HR</button>
          <button>Show IT</button>
          <button>Show Finance</button>
        </div>
        <div className={style.sort}>
          <button>Sort By Salary Ascending</button>
          <button>Sort By Salary Descending</button>
        </div>

        {data.map((item) => {
          return (
            <>
              <div className={style.element} key={item.id}>
                <ul>
                  <li>Name: {item.name}</li>
                  <li>Gender : {item.gender}</li>
                  <li>Role : {item.role}</li>
                  <li>Department :{item.department}</li>
                  <li>Salary :{item.salary}</li>
                </ul>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
