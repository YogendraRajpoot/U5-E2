import React, { useEffect, useState } from "react";
import style from "./TodoInput.module.css";

export const TodoInput = ({ data, setData }) => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = () => {
    fetch(`http://localhost:3001/Todo`)
      .then((res) => res.json())
      .then((res) => setData(res));
  };
  const handleadd = (name, department, gender, role, salary) => {
    const onload = {
      name,
      department,
      gender,
      role,
      salary,
    };

    fetch("http://localhost:3001/Todo", {
      method: "Post",
      body: JSON.stringify(onload),
      headers: { "content-type": "application/json" },
    }).then((res) => {
      getTodo();
    });
  };

  return (
    <div className={style.container}>
      <h1>ADD EMPLOYEE DETAIL </h1>
      <input
        className={style.input}
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className={style.input}
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />
      <input
        className={style.input}
        placeholder="Gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <input
        className={style.input}
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <input
        className={style.input}
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />
      <button
        className={style.btn}
        onClick={() => {
          if (
            name !== "" &&
            department !== "" &&
            gender !== "" &&
            role !== "" &&
            salary !== ""
          ) {
            handleadd(name, department, gender, role, salary);
            setName("");
            setDepartment("");
            setGender("");
            setRole("");
            setSalary("");
          } else {
            alert("Enter Todo's");
          }
        }}
      >
      Add DETAIL
      </button>
    </div>
  );
};
