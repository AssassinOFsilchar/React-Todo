"use client";
import React, { useState } from 'react'; 

const Page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setmainTask(copytask);
  };

  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0)
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem'  }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '66.66%' }}>
            <h5 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black' }}>
              {t.title}
            </h5>
            <h6 style={{ fontSize: '1rem', fontWeight: 'medium', color: 'grey' }}>
              {t.desc}
            </h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            style={{ backgroundColor: '#4caf50', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: 'bold' }}
          >
            Delete
          </button>
        </li>
      );
    });

  return (
    <>
      <a href="https://assassinofsilchar.github.io/Portfolio/index.html">
      <h1 style={{ backgroundColor: 'black', color: 'white', padding: '1.25rem', fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center' }}>
        Ranjan's Todo List
      </h1>
      </a>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          style={{ fontSize: '1.5rem', borderColor: 'grey', borderWidth: '4px', margin: '0.5rem 2rem', padding: '0.5rem 1rem', color: 'black' }}
          placeholder='Enter Task'
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type='text'
          style={{ fontSize: '1.5rem', borderColor: 'grey', borderWidth: '4px', margin: '0.5rem 2rem', padding: '0.5rem 1rem', color: 'black' }}
          placeholder='Enter Description'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button
          style={{ backgroundColor: '#4caf50', color: 'white', padding: '1rem 2rem', fontSize: '1.5rem', fontWeight: 'bold', borderRadius: '0.25rem', margin: '1.25rem' }}
        >
          Add Task
        </button>
      </form>
      <hr />
      <div style={{ padding: '2rem', backgroundColor: '#dddddd'}}>
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default Page;
