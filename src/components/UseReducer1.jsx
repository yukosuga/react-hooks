import React, {useReducer} from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log("Increment");
      return {count: state.count + 1};
    case "DECREMENT":
      console.log("Decrement");
      return {count: state.count - 1};
    default:
      return state;
  }
};

export default function UseReducer1() {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  const increase = () => {
    dispatch({type: "INCREMENT"});
  };
  const decrease = () => {
    dispatch({type: "DECREMENT"});
  };

  return (
    <div className="my-10">
      <p className="m-4 text-slate-600">Count: {state.count}</p>
      <button
        className="px-4 py-2 m-4 text-white bg-teal-500 rounded-md shadow-md hover:bg-teal-100 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50"
        onClick={increase}
      >
        Increment
      </button>
      <button
        className="px-4 py-2 m-4 text-white bg-teal-500 rounded-md shadow-md hover:bg-teal-100 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50"
        onClick={decrease}
      >
        Decrement
      </button>    </div>
  );
}
