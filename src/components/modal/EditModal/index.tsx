import style from "./style.module.scss";
import { MdClose } from "react-icons/md";
import { Task, TaskUpdate } from "../../../pages/HomePage";
import { useState } from "react";

type Props = {
  editTask?: Task;
  updateTask: (task: TaskUpdate, taskId: number) => Promise<void>;
  closeEditModal: () => void;
};

export const EditModal = ({ editTask, updateTask, closeEditModal }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    const newTask = {
      title: title || editTask!.title,
      description: description || editTask!.description,
    };

    updateTask(newTask, editTask!.id);

    setTitle("");
    setDescription("");
  };
  return (
    <div className={style.modalOverlay}>
      <div className={style.modalBox}>
        <form className={style.container} onSubmit={onSubmit}>
          <MdClose
            size={21}
            className={style.closeBtn}
            onClick={closeEditModal}
          />
          <h2>Editar tarefa</h2>
          <div>
            <input
              type="text"
              value={title}
              placeholder={editTask!.title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              className={style.area}
              value={description}
              placeholder={editTask!.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button>Atualizar tarefa</button>
        </form>
      </div>
    </div>
  );
};
