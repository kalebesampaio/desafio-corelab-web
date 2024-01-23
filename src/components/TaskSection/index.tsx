import { Task, TaskUpdate } from "../../pages/HomePage";
import { TaskCard } from "./TaskCard";
import style from "./style.module.scss";
type Props = {
  taskList: Task[];
  setTasks?: () => [];
  type: string;
  updateTask: (task: TaskUpdate, taskId: number) => Promise<void>;
  removeTask: (task: Task) => Promise<void>;
  setEditTask: (task: Task) => void;
};
export const TaskSection = ({
  taskList,
  type,
  updateTask,
  removeTask,
  setEditTask,
}: Props) => {
  return (
    <section className={style.container}>
      <span className="span">{type}</span>
      <ul>
        {type === "Favoritas"
          ? taskList.map((task) =>
              task.favorite ? (
                <TaskCard
                  key={task.id}
                  task={task}
                  updateTask={updateTask}
                  removeTask={removeTask}
                  setEditTask={setEditTask}
                />
              ) : (
                <></>
              )
            )
          : taskList.map((task) =>
              task.favorite ? (
                <></>
              ) : (
                <TaskCard
                  key={task.id}
                  task={task}
                  updateTask={updateTask}
                  removeTask={removeTask}
                  setEditTask={setEditTask}
                />
              )
            )}
      </ul>
    </section>
  );
};
