import { useEffect, useState } from "react";
import { DefaultTemplate } from "../components/DefaultTemplate";
import { Form } from "../components/Form";
import { TaskSection } from "../components/TaskSection";
import { taskAPI } from "../services/api";
import { toast } from "react-toastify";
import { EditModal } from "../components/modal/EditModal";

export type Task = {
  id: number;
  title: string;
  description: string;
  color: string;
  favorite: boolean;
};
export type TaskUpdate = {
  id?: number;
  title?: string;
  description?: string;
  color?: string;
  favorite?: boolean;
};

export const HomePage = () => {
  const [taskList, setTasks] = useState<Task[]>([]);
  const [editTask, setEditTask] = useState<Task | null>(null);
  const [search, setSearch] = useState<string>("");

  const filteredTasks = taskList.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const getTasks = async () => {
      const { data } = await taskAPI.get("/tasks");
      setTasks(data);
    };

    getTasks();
  }, []);

  const addTask = async (task: TaskUpdate) => {
    try {
      const { data } = await taskAPI.post("/tasks", task);
      setTasks([...taskList, data]);
      toast.success("A tarefa foi adicionada com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Ops, aconteceu algum erro na aplicação!");
    }
  };

  const updateTask = async (task: TaskUpdate, taskId: number) => {
    try {
      const { data } = await taskAPI.patch(`/tasks/${taskId}`, task);

      const updatedTasks = taskList.map((el) => {
        if (el.id === data.id) {
          return data;
        }

        return el;
      });

      setTasks(updatedTasks);
      setEditTask(null);

      toast.success("A tarefa foi atualizada com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Ops, aconteceu algum erro na aplicação!");
    }
  };

  const removeTask = async (task: Task) => {
    try {
      await taskAPI.delete(`/tasks/${task.id}`);
      const newTasks = taskList.filter(({ id }) => id !== task.id);
      setTasks(newTasks);
      toast.success("A task foi removida com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Ops, aconteceu algum erro na aplicação!");
    }
  };

  const closeEditModal = () => {
    setEditTask(null);
  };

  return (
    <DefaultTemplate setSearch={setSearch} search={search}>
      <Form addTask={addTask} />
      <TaskSection
        taskList={filteredTasks}
        type={"Favoritas"}
        updateTask={updateTask}
        removeTask={removeTask}
        setEditTask={setEditTask}
      />
      <TaskSection
        taskList={taskList}
        type={"Outras"}
        updateTask={updateTask}
        removeTask={removeTask}
        setEditTask={setEditTask}
      />
      {editTask ? (
        <EditModal
          editTask={editTask}
          updateTask={updateTask}
          closeEditModal={closeEditModal}
        />
      ) : (
        <></>
      )}
    </DefaultTemplate>
  );
};
