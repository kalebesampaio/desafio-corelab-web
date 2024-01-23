import { TaskCard } from "./TaskCard";
import style from "./style.module.scss";

export const TaskSection = () => {
  return (
    <section className={style.container}>
      <span className="span">Favoritas</span>
      <ul>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </ul>
    </section>
  );
};
