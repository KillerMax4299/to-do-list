import Dropdown from "../container/Dropdown";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useTodoStore from "../components/List";

const AddTask = () => {
  const reset = "border-gray-400";
  const red = "ring ring-red-500/50 border-red-500";
  const { todos, addTodo } = useTodoStore();
  const [prioVal, setPrioVal] = useState("");
  const [taskname_ring, setTaskname_ring] = useState(reset);
  const [description_ring, setDescription_ring] = useState(reset);
  const [priority_ring, setPriority_ring] = useState(reset);

  const name = useRef();
  const desc = useRef();

  function getCurrentUnixTimestamp() {
    return Math.floor(Date.now() / 1000);
  }

  function priority(data) {
    setPrioVal(data);
  }
  const navigate = useNavigate();

  function handleClick() {
    const task_name = name.current.value;
    const description = desc.current.value;
    const priority = prioVal;
    !task_name && setTaskname_ring(red);
    !description && setDescription_ring(red);
    !priority && setPriority_ring(red);
    if (task_name && description && priority) {
      addTodo({
        id: getCurrentUnixTimestamp(),
        name: task_name,
        description: description,
        priority: priority,
      });
      navigate("/")
    }
  }

  return (
    <div className="flex flex-col space-y-4 p-2 px-4 h-screen ">
      <div className="flex flex-col">
        <label className="font-semibold capitalize py-1 text-zinc-700">
          task name
        </label>
        <input
          ref={name}
          onFocus={() => setTaskname_ring(reset)}
          spellCheck="false"
          type="text"
          className={
            "border rounded focus:ring outline-none p-2 focus:border-blue-500 " +
            taskname_ring
          }
        />
      </div>
      <div className="flex flex-col flex-grow">
        <label className="font-semibold capitalize py-1 text-zinc-700">
          task description
        </label>
        <textarea
          onFocus={() => setDescription_ring(reset)}
          ref={desc}
          style={{ resize: "none" }}
          type="text"
          className={
            "border h-3/5 rounded focus:ring outline-none px-2 p-1 focus:border-blue-500 " +
            description_ring
          }
        />
        <Dropdown
          priority={priority}
          priority_ring={priority_ring}
          setPriority_ring={setPriority_ring}
        />
      </div>

      <div className="flex space-x-2">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="capitalize py-1 focus:ring ring-blue-300 outline-none border-red-500 rounded border text-red-500 font-medium bg-white w-1/2 transition-all duration-200 active:scale-[.98]"
        >
          cancel
        </button>
        <button
          onClick={handleClick}
          className="capitalize py-1 focus:ring ring-blue-300 outline-none w-1/2 border border-indigo-500 font-semibold text-white bg-indigo-500 rounded transition-all duration-200 active:scale-[.98]"
        >
          add
        </button>
      </div>
    </div>
  );
};

export default AddTask;
