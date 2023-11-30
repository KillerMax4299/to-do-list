import useTodoStore from "../components/List";
import { Pending, Completed } from "../components/Tasks";
const TaskList = () => {
  const { todos, completed } = useTodoStore();
  return (
    <div className="flex flex-col">
      {todos.length > 0 && (
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold tracking-tigher px-2 text-indigo-400 mt-2">
            Pending
          </h1>
          {todos.map((elem) => (
            <Pending data={elem} key={elem.id} />
          ))}
        </div>
      )}
      {completed.length > 0 && (
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold tracking-tigher px-2 text-indigo-400 mt-2">
            Completed
          </h1>
          {completed.map((elem) => (
            <Completed data={elem} key={elem.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
