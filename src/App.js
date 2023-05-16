import counter from './store/counter';
import './App.css';
import { observer } from 'mobx-react-lite';
import todo from './store/todo';
import { useState } from 'react';
import request from './store/request';

const App = observer(() =>  {

  const [newTodo, setNewTodo] = useState("");
  const [newUrl, setNewUrl] = useState("");

  return (
    <div className="App">
      <div>
        {/* {
          counter.count
        } */}
        {
          counter.total
        }
        <button onClick={() => counter.increment()}>
        increment
        </button>
        <button onClick={() => counter.decrement()}>
          decrement
        </button>
      </div>
      <div>
        {
          todo.todos.map((elem,index) => <div key={elem.id}>
            <h3>{elem.todo}</h3>
            <p>{elem.id}</p>
            <span>
              <input type='checkbox'  disabled={elem.completed}
              onClick={() => {
                todo.finisTodo(elem);
              }}
              />
            </span>
            <button onClick={() => {todo.removeTodo(elem.id)}}>
              delete
            </button>
          </div>)
        }
      </div>
      <input value={newTodo} onChange={(eo) => {
        setNewTodo(eo.target.value);
      }}/>
      <button onClick={(eo) => {
        todo.addTodo({
          id: newTodo,
          todo: newTodo,
          completed: false
        })
      }}>
        add new todo
      </button>
      <div>
      <input value={newUrl} onChange={(eo) => setNewUrl(eo.target.value)}/>
      <button onClick={() => {
        request.fetchRequest(newUrl)
        setNewUrl("")
        }}>
        do request
      </button>
      <ul>
      {
       request.data && request.data.map((elem, index) => <li key={elem.id}>
          {elem.title || elem.name}
        </li>)
      }
      </ul>
      </div>
    </div>
  );
})

export default App;
