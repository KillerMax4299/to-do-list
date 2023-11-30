import { AddTaskButton } from "../App";

import TaskList from "./TaskList";

const Home = () => {
  return (
    <>
      <div className="bg-white">
        <TaskList />
        {/* <AddTaskButton /> */}
      </div>
    </>
  );
};

export default Home;
