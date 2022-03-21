import React from "react";
import style from "./EmployeeList.module.css";

export const EmployeeList = ({ data, setData }) => {

  const sortJsonA = (e) => {
    console.log("A", e);
      fetch(`http://localhost:3001/Employee?_sort=salary&_order=asc`)
        .then((r) => r.json())
        .then((r) => {
          setData(r);
          console.log(r);
        });
    
  };
  const sortJsonD = (e) => {
    console.log("A", e);
      fetch(`http://localhost:3001/Employee?_sort=salary&_order=desc`)
        .then((r) => r.json())
        .then((r) => {
          setData(r);
          console.log(r);
        });
    
  };


  const filterByCategory = (e) => {
    console.log("A", e);
    if (e === "all") {
      fetch(`http://localhost:3001/Employee`)
        .then((r) => r.json())
        .then((r) => {
          setData(r);
          console.log(r);
        });
    } else {
      fetch(`http://localhost:3001/Employee?department=${e}`)
        .then((r) => r.json())
        .then((r) => {
          setData(r);
          console.log(r);
        });
    }
  };
  return (
    <div className={style.container}>
      <div className={style.top}>
        <h1>EMPLOYEE LIST</h1>
        <div className={style.sort}>
          <button onClick={sortJsonA}>Sort By Salary Ascending</button>
          <button onClick={sortJsonD}>Sort By Salary Descending</button>
        </div>
        <div className={style.category}>
          <button onClick={() => filterByCategory("all")}>
            Show All Department{" "}
          </button>
          <button onClick={() => filterByCategory("Marketing")}>
            {" "}
            Show Marketing
          </button>
          <button onClick={() => filterByCategory("Finance")}>
            Show Finance
          </button>
          <button onClick={() => filterByCategory("HR")}>Show HR</button>
          <button onClick={() => filterByCategory("IT")}>Show IT</button>
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
