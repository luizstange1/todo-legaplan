"use client";
import { TrashSimple, List, SmileySad } from "@phosphor-icons/react/dist/ssr";
import "./styles.scss";
import { useState } from "react";
import { ModalAddNewTask, ModalDeleteTask } from "./components";
import { useTasks } from "@/app/hooks/useTasks";

export function Tasks() {
  const [openModalNewTask, setOpenModalNewTask] = useState(false);
  const [openModalDeleteTask, setOpenModalDeleteTask] = useState(false);
  const [idOfTheTaskToBeDeleted, setIdOfTheTaskToBeDeleted] = useState<
    string | null
  >(null);
  const { tasks, setTasks } = useTasks();
  const tasksInProgress = tasks.filter((task) => {
    return task.status === "IN_PROGRESS";
  });
  const tasksCompleted = tasks.filter((task) => {
    return task.status === "FINISHED";
  });

  function handleOpenModalNewTask() {
    setOpenModalNewTask(true);
  }

  function handleCloseModalNewTask() {
    setOpenModalNewTask(false);
  }

  function handleOpenModalDeleteTask(id: string) {
    setOpenModalDeleteTask(true);
    setIdOfTheTaskToBeDeleted(id);
  }

  function handleCloseModalDeleteTask() {
    setOpenModalDeleteTask(false);
    setIdOfTheTaskToBeDeleted(null);
  }

  function handleDeleteTask() {
    if (idOfTheTaskToBeDeleted) {
      const newTaskList = tasks.filter((task) => {
        return task.id !== idOfTheTaskToBeDeleted;
      });

      setTasks(newTaskList);

      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    setIdOfTheTaskToBeDeleted(null);
    setOpenModalDeleteTask(false);
  }

  function handleCompleteTask(id: string) {
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: "FINISHED" };
      }
      return task;
    });

    setTasks(updatedTask);
    localStorage.setItem("tasks", JSON.stringify(updatedTask));
  }

  return (
    <>
      {openModalNewTask && (
        <ModalAddNewTask handleCloseModalNewTask={handleCloseModalNewTask} />
      )}

      {openModalDeleteTask && (
        <ModalDeleteTask
          handleCloseModalDeleteTask={handleCloseModalDeleteTask}
          handleDeleteTask={handleDeleteTask}
        />
      )}

      <main className="main">
        <div className="wrapper">
          <h2 className="subtitle">Suas tarefas de hoje</h2>

          <div className="todoList">
            {tasksInProgress.length === 0 ? (
              <strong>
                <span className="noTaskText">
                  <List size={24} />
                  Você ainda não tem tarefas criadas
                </span>
              </strong>
            ) : (
              tasksInProgress.map((task) => (
                <ul className="tasks" key={task.id}>
                  <li className="task">
                    <input
                      type="checkbox"
                      className="checkbox"
                      onClick={() => handleCompleteTask(task.id)}
                    />
                    <span className="taskTitle">{task.description}</span>
                  </li>
                  <TrashSimple
                    size={20}
                    className="trashIcon"
                    onClick={() => handleOpenModalDeleteTask(task.id)}
                  />
                </ul>
              ))
            )}
          </div>

          <h2 className="subtitle">Tarefas finalizadas</h2>

          <div className="todoList">
            {tasksCompleted.length === 0 ? (
              <strong>
                <span className="noTaskText">
                  <SmileySad size={24} />
                  Você ainda não tem tarefas concluídas
                </span>
              </strong>
            ) : (
              tasksCompleted.map((task) => (
                <ul className="tasks" key={task.id}>
                  <li className="task">
                    <input type="checkbox" className="checkbox" checked />
                    <span className="titleOfCompletedTask">
                      {task.description}
                    </span>
                  </li>
                  <TrashSimple
                    size={20}
                    className="trashIcon"
                    onClick={() => handleOpenModalDeleteTask(task.id)}
                  />
                </ul>
              ))
            )}
          </div>
        </div>

        <button className="addTaskButton" onClick={handleOpenModalNewTask}>
          Adicionar nova tarefa
        </button>
      </main>
    </>
  );
}
