import React from "react";
import { RiDeleteBin2Line, RiEditBoxLine } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import useTodoStore from "../components/List";
import PriorityComponent from "../components/PriorityComponent";

const ViewTask = () => {
  const navigate = useNavigate();
  const { completed, todos } = useTodoStore();
  const { id } = useParams();
  const { name, description, priority } = [...todos,...completed].filter((elem) => elem.id == id)[0]
  
  const status = Boolean(todos.filter(elem => elem.id == id)[0])
    

  return (
    <div>
      { status
        ? (
        <div className="flex justify-between items-stretch p-2">
          <span
            className="text-2xl cursor-pointer text-stone-500 self-center"
            onClick={() => navigate("/")}
          >
            <IoIosArrowBack />
          </span>
          <h1 className="self-center text-2xl font-bold tracking-tight whitespace-nowrap text-elipsis overflow-hidden">
            {name}
          </h1>
          
            <button
              onClick={() => navigate("/edit/" + id)}
              className="flex items-center space-x-2 self-end mr-3 font-medium border rounded-lg pl-4 pr-3 text-indigo-700 bg-indigo-200 border-indigo-500"
            >
              <span>Edit</span>
              <RiEditBoxLine />
            </button>
          
        </div>
      ) : (
        <div className="flex justify-center items-stretch p-2">
          <span
            className="text-2xl cursor-pointer text-stone-500 self-center absolute left-2 md:left-[12rem] xl:left-[30rem] "
            onClick={() => navigate("/")}
          >
            <IoIosArrowBack />
          </span>
          <h1 className="self-center text-3xl font-bold tracking-tight ">
            {name}
          </h1>
          
        </div>
      )}
      <div className="mt-2 ">
        <PriorityComponent prio={priority} viewPage={status} status={!status} />
      </div>
      <p className="p-4 text-justify text-stone-500">{description}</p>
    </div>
  );
};

export default ViewTask;
