import { Task, useTasks } from "@/app/hooks/useTasks";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import "./styles.scss";
import { useEffect, useState } from "react";

interface modalAddNewTaskProps {
  handleCloseModalNewTask: (arg0: boolean) => void;
}

export function ModalAddNewTask({
  handleCloseModalNewTask,
}: modalAddNewTaskProps) {
  const [isTaskAdded, setIsTaskAdded] = useState(false);
  const { tasks, setTasks } = useTasks();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<Task>({
    mode: "onChange",
    defaultValues: {
      description: "",
    },
  });

  function handleSubmitNewTask(data: Task) {
    const newTask = {
      id: uuidv4(),
      description: data.description,
      status: "IN_PROGRESS",
    };

    setTasks([...tasks, newTask]);
    setIsTaskAdded(true);
    window.location.reload();
  }

  useEffect(() => {
    if (isTaskAdded) {
      handleCloseModalNewTask(false);
      setIsTaskAdded(false);
    }
  }, [tasks, isTaskAdded, handleCloseModalNewTask]);

  return (
    <div className="modalOverlay">
      <div className="modal">
        <h1 className="newTaskModalTitle">Nova Tarefa</h1>
        <form onSubmit={handleSubmit(handleSubmitNewTask)}>
          <div className="containerNewTask">
            <span>Título</span>

            <input
              type="text"
              className="newTaskInput"
              placeholder="Digite"
              {...register("description", { required: true })}
            />
          </div>

          <div className="buttons">
            <button
              className="closeModalNewTaskButton"
              onClick={() => handleCloseModalNewTask(false)}
            >
              Cancelar
            </button>
            <button
              className="addNewTaskButton"
              type="submit"
              disabled={!isValid}
            >
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
