import useTodoStore from "./List";
import { RiDeleteBin2Line, RiEditBoxLine } from "react-icons/ri";
import PriorityComponent from "./PriorityComponent";
import { useNavigate } from "react-router-dom";

export const Pending = ({ data }) => {
  const navigate = useNavigate();
  const { removeTodo, addComp } = useTodoStore();
  const { id, name, description, priority } = data;
  return (
    <div className="py-2 flex items-center m-2 justify-between">
      <div>
        <input
          type="checkbox"
          className="checkbox mx-1 "
          onChange={() => addComp(id)}
        />
      </div>
      <div
        className="text-lg font-semibold flex-grow px-2 md:px-4 overflow-hidden cursor-pointer text-ellipsis whitespace-nowrap"
        onClick={() => navigate("/" + id)}
      >
        {name}
      </div>
      {/* <span>{description}</span> */}
      <div className="flex ">
        <PriorityComponent prio={priority} />

        <button
          className="mx-1 text-red-500 text-xl "
          onClick={() => removeTodo(id)}
        >
          <RiDeleteBin2Line />
        </button>
      </div>
    </div>
  );
};

export const Completed = ({ data }) => {
  const navigate = useNavigate();
  const { id, name, priority } = data;
  const { removeComp, deleteComp } = useTodoStore();
  return (
    <>
      <div className="py-2 flex items-center m-2 justify-between">
        <div>
          <input
            type="checkbox"
            className="checkbox mx-1"
            onChange={() => removeComp(id)}
            checked
          />
        </div>

        <div
          className="text-lg font-semibold flex-grow px-2 md:px-4 overflow-hidden cursor-pointer text-ellipsis whitespace-nowrap"
          onClick={() => navigate("/" + id)}
        >
          {name}
        </div>
        {/* <span>{description}</span> */}
        <div className="flex">
          <PriorityComponent prio={priority} />
          <button
            className="mx-1 text-red-500 text-xl"
            onClick={() => deleteComp(id)}
          >
            <RiDeleteBin2Line />
          </button>
        </div>
      </div>
    </>
  );
};
