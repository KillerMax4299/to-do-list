import "./App.css";
import AddTask from "./routes/AddTask";
import Home from "./container/Home";
import ViewTask from "./routes/ViewTask";
import EditTask from "./routes/EditTask";
import { Routes, Route, useNavigate,useLocation } from "react-router-dom";

function App() {
  let location = useLocation();
  console.log(location);

  return (
    <div className="flex justify-center bg-white h-screen">
      <div className="md:w-3/5 xl:w-1/2 w-full">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="addtask" element={<AddTask />} />
          <Route path="/:id" element={<ViewTask />} />
          <Route path="edit/:id" element={<EditTask />} />
        </Routes>
      </div>
      {location.pathname == "/" && <AddTaskButton />}
    </div>
  );
}

export default App;

export const AddTaskButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="fixed bottom-0 w-full flex justify-center p-2 bg-white">
        <button
          onClick={() => navigate("/addtask")}
          className="bg-indigo-500 w-full md:w-3/5 xl:w-1/2 py-2 rounded text-white font-semibold tracking-wide active:scale-[.98] transition-all duration-200"
        >
          Add Task
        </button>
      </div>
    </>
  );
};
