import { useState } from "react";
import style from "./style.module.scss";
import { IoIosStarOutline } from "react-icons/io";
import { TaskUpdate } from "../../pages/HomePage";

type Props = {
  addTask: (task: TaskUpdate) => Promise<void>;
};

export const Form = ({ addTask }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    addTask({ title, description, color: "white" });

    setTitle("");
    setDescription("");
  };
  return (
    <form className={style.container} onSubmit={onSubmit}>
      <div>
        <input
          type="text"
          placeholder="Título"
          className={style.inpt}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <IoIosStarOutline className={style.favorite} />
      </div>
      <div className={style.none}>
        <textarea
          className={`${style.inpt} ${style.area}`}
          placeholder="Criar nota..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {title ? <button className={style.btn}>Criar</button> : <></>}
      </div>
    </form>
  );
};
