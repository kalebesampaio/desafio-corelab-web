import { IoIosStarOutline } from "react-icons/io";
import style from "./style.module.scss";
import { MdOutlineEdit, MdOutlineStar } from "react-icons/md";
import { IoMdColorFill } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { Task, TaskUpdate } from "../../../pages/HomePage";
import { useState } from "react";
import { Dropdown } from "../../Dropdown";

type Props = {
  task: Task;
  updateTask: (task: TaskUpdate, taskId: number) => Promise<void>;
  removeTask: (task: Task) => Promise<void>;
  setEditTask: (task: Task) => void;
};

export const TaskCard = ({
  task,
  removeTask,
  updateTask,
  setEditTask,
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <li className={`${style.container} ${task.color}`}>
      <div>
        <h2 className="title">{task.title}</h2>
        {task.favorite ? (
          <MdOutlineStar
            className={style.favorite}
            color="orange"
            onClick={() => updateTask({ favorite: false }, task.id)}
          />
        ) : (
          <IoIosStarOutline
            className={style.favorite}
            onClick={() => updateTask({ favorite: true }, task.id)}
          />
        )}
      </div>
      <div className={style.none}>
        <p className="paragraph">{task.description}</p>
        <nav className={style.nav}>
          <section>
            <MdOutlineEdit onClick={() => setEditTask(task)} />
            <IoMdColorFill onClick={() => setOpen(!open)} />
          </section>
          <MdClose onClick={() => removeTask(task)} />
        </nav>
      </div>
      {open ? (
        <Dropdown open={open} task={task} updateTask={updateTask} />
      ) : null}
    </li>
  );
};
