import React, {useReducer, useState} from "react";

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // const newState = [...state, action.payload];
      // console.log("New State: ", newState);
      return [...state, action.payload];
      case "DELETE_ITEM":
        return state.filter((task) => task.id !== action.payload)
    default:
      return state;
  }
};

function UseReducer2() {
  const [inputValue, setInputValue] = useState({content: ""});
  const [state, dispatch] = useReducer(taskReducer, []);
  const addTask = (newTask) => {
    const newTaskWithID = {content: newTask, id: Date.now()};
    dispatch({type: "ADD_ITEM", payload: newTaskWithID});
  };

  const deleteTask = (id) => {
    dispatch({type: "DELETE_ITEM", payload: id})
  };

  const inputHandler = (e) => {
    // console.log(e.target.value);
    setInputValue({...inputValue, content: e.target.value});
  };
  return (
    <>
      <div className="flex my-4">
        <div className="w-1/2">
          <input
            id="input"
            type="text"
            className="m-4 border ring-gray-300 rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
            placeholder="Enter your item here ..."
            value={inputValue.content}
            onChange={inputHandler}
          />
          <button
            className="px-4 py-2 m-4 text-white bg-teal-500 rounded-md shadow-md hover:bg-teal-100 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50"
            onClick={() => {
              inputValue.content && addTask(inputValue);
              setInputValue({...inputValue, content: ""})
            }}
          >
            add item
          </button>
        </div>
        <div className="w-1/2">
          {state.map((value, index) => (
            <div
              key={index}
              className="flex justify-between border border-white-600 m-2 p-1"
            >
              <h2 className="py-2 m-1 block">{value.content.content}</h2>
              <button className="px-4 py-2 m-4 text-white bg-teal-500 rounded-md shadow-md hover:bg-teal-100 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50"
              onClick={() => deleteTask(value.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UseReducer2;
