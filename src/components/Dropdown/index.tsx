import { Task, TaskUpdate } from "../../pages/HomePage";
import style from "./style.module.scss";

type Props = {
  open: boolean;
  task: Task;
  updateTask: (updateTask: TaskUpdate, taskId: number) => Promise<void>;
};

export const Dropdown = ({ open, task, updateTask }: Props) => {
  return (
    <ul className={`${style.dropdown_menu} ${open ? "active" : "inactive"}`}>
      <li
        className={`light-yellow ${style.item}`}
        onClick={() => updateTask({ color: "light-yellow" }, task.id)}
      ></li>
      <li
        className={`ligth-orange ${style.item}`}
        onClick={() => updateTask({ color: "light-yellow" }, task.id)}
      ></li>
      <li
        className={`light-violet ${style.item}`}
        onClick={() => updateTask({ color: "light-violet" }, task.id)}
      ></li>
      <li
        className={`light-brown ${style.item}`}
        onClick={() => updateTask({ color: "light-brown" }, task.id)}
      ></li>
      <li
        className={`pale-orange ${style.item}`}
        onClick={() => updateTask({ color: "pale-orange" }, task.id)}
      ></li>
      <li
        className={`light-blue ${style.item}`}
        onClick={() => updateTask({ color: "light-blue" }, task.id)}
      ></li>
      <li
        className={`light-gray ${style.item}`}
        onClick={() => updateTask({ color: "light-gray" }, task.id)}
      ></li>
      <li
        className={`light-red ${style.item}`}
        onClick={() => updateTask({ color: "light-red" }, task.id)}
      ></li>
      <li
        className={`green ${style.item}`}
        onClick={() => updateTask({ color: "green" }, task.id)}
      ></li>
      <li
        className={`white ${style.item}`}
        onClick={() => updateTask({ color: "white" }, task.id)}
      ></li>
      <li
        className={`blue ${style.item}`}
        onClick={() => updateTask({ color: "blue" }, task.id)}
      ></li>
    </ul>
  );
};
