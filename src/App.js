import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UseReducer1 from "./components/UseReducer1";
import UseReducer2 from "./components/UseReducer2";
import Parent from "./components/Parent";

function App() {
  return (
    <div className="bg-teal-200 text-slate-600">
      <nav className="bg-teal-100" flex space-x-4>
        <ul className="flex space-x-4">
          <li className="p-4 hover:bg-teal-500 hover:text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 hover:bg-teal-500 hover:text-white">
            <Link to="/use-reducer1">useReducer 1</Link>
          </li>
          <li className="p-4 hover:bg-teal-500 hover:text-white">
            <Link to="/use-reducer2">useReducer 2</Link>
          </li>
          <li className="p-4 hover:bg-teal-500 hover:text-white">
            <Link to="/use-context1">useContext</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/use-reducer1" element={<UseReducer1 />} />
        <Route path="/use-reducer2" element={<UseReducer2 />} />
        <Route path="/use-context1" element={<Parent />} />
      </Routes>
    </div>
  );
}

export default App;
