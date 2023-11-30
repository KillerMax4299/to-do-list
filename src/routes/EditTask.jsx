import Dropdown from "../container/Dropdown";
import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useTodoStore from "../components/List";

const EditTask = () => {
  const reset = "border-gray-400";
  const red = "ring ring-red-500/50 border-red-500";
  const { todos, addTodo, updateTodo } = useTodoStore();
  const { id } = useParams();

  const { name, description, priority } = todos.filter(
    (elem) => elem.id == id
  )[0];
  

  const [prioVal, setPrioVal] = useState(priority);
  const [taskname_ring, setTaskname_ring] = useState(reset);
  const [description_ring, setDescription_ring] = useState(reset);
  const [priority_ring, setPriority_ring] = useState(reset);

  const task_name = useRef();
  const desc = useRef();

  function priority_func(data) {
    setPrioVal(data);
  }
  const navigate = useNavigate();

  function handleClick() {
    const name_edit = task_name.current.value;
    const desc_edit = desc.current.value;
    !name_edit && setTaskname_ring(red);
    !desc_edit && setDescription_ring(red);
    if (desc_edit && name_edit) {
      if (name != name_edit || desc != desc_edit || priority != prioVal) {
        
        updateTodo(id,{
          id: id,
          name: name_edit,
          description: desc_edit,
          priority: prioVal,
        });
        navigate("/" + id);
      }
    }
  }

  return (
    <div className="flex flex-col space-y-4 p-2 px-4 h-screen ">
      <div className="flex flex-col">
        <label className="font-semibold capitalize py-1 text-zinc-700">
          task name
        </label>
        <input
          ref={task_name}
          onFocus={() => setTaskname_ring(reset)}
          spellCheck="false"
          defaultValue={name}
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
          spellCheck="false"
          onFocus={() => setDescription_ring(reset)}
          ref={desc}
          defaultValue={description}
          style={{ resize: "none" }}
          type="text"
          className={
            "border h-3/5 rounded focus:ring outline-none px-2 p-1 focus:border-blue-500 " +
            description_ring
          }
        />
        <Dropdown
          priority={priority_func}
          priority_ring={priority_ring}
          setPriority_ring={setPriority_ring}
          editModeSelectedPrio={priority}
        />
      </div>

      <div className="flex space-x-2">
        <button
          onClick={() => {
            navigate("/"+id);
          }}
          className="capitalize py-1 focus:ring ring-blue-300 outline-none border-red-500 rounded border text-red-500 font-medium bg-white w-1/2 transition-all duration-200 active:scale-[.98]"
        >
          cancel
        </button>
        <button
          onClick={handleClick}
          className="capitalize py-1 focus:ring ring-blue-300 outline-none w-1/2 border border-indigo-500 font-semibold text-white bg-indigo-500 rounded transition-all duration-200 active:scale-[.98]"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditTask;
