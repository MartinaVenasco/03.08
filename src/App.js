import React, { useReducer } from "react";

import Todo from "./components/ToDo";
import Form from "./components/Form";
import Button from "./components/Button";

const stateDefaultValue = {
  list: [],
  counter: 1,
  isError: false,
 
};

const reducer = (state, action) => {
  let { type, payload } = action;
  let { list, isError, counter} = state;

  // Switch
  switch (type) {
    case "AddTask": {
      console.log(task);
      if (!task.todo || !task.day || !task.hour || !task.descrizione) {
        isError = true;
       
      } else {
        isError = false;
        let id = counter;
        counter++;
        list = [...list, { ...task, id: id }];
       
      }
    }
 // eslint-disable-next-line
    case "DeleteTask": {
      list = list.filter((obj) => obj.id != payload);
    }
 // eslint-disable-next-line
    default:
  }

  return {
    ...state,
    list: list,
    isError: isError,
    counter: counter,
    
  };
};

const task = {};

const App = () => {
  const [state, dispatch] = useReducer(reducer, stateDefaultValue);

  const handleInputChange = (e) => {
    task[e.target.name] = e.target.value;
    console.log(task);
  };


  const handleAddDispatch = (e) => {
    dispatch({ type: "AddTask"});

  };

  const handleDeleteDispatch = (e) => {
    dispatch({
      type: "DeleteTask",
      payload: e.target.id,
    });
  };

  return (
    <div className="main-container">
      <Form state={state} onChange={handleInputChange}>
        <Button onClick={handleAddDispatch} >Aggiungi</Button>
      </Form>

      {state.list.map((obj, index) => {
        return (
          <div className="task">
          <Todo
            key={"task" + index}
            todoData={obj}
            onClick={handleDeleteDispatch}
          />
       </div> );
      })}
    </div>
  );
};

export default App;
