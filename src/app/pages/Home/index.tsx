"use client";

import { TrashSimple } from "@phosphor-icons/react/dist/ssr";
import "./styles.scss";
import { useEffect, useState } from "react";
import { ModalAddNewTask, ModalDeleteTask } from "./components";
import { useTasks } from "@/app/hooks/useTasks";

export function Tasks() {
  const [openModalNewTask, setOpenModalNewTask] = useState(false);
  const [openModalDeleteTask, setOpenModalDeleteTask] = useState(false);
  const { tasks } = useTasks();

  function handleOpenModalNewTask() {
    setOpenModalNewTask(true);
  }

  function handleCloseModalNewTask() {
    setOpenModalNewTask(false);
  }

  function handleOpenModalDeleteTask() {
    setOpenModalDeleteTask(true);
  }

  function handleCloseModalDeleteTask() {
    setOpenModalDeleteTask(false);
  }

  return (
    <>
      {openModalNewTask && (
        <ModalAddNewTask handleCloseModalNewTask={handleCloseModalNewTask} />
      )}

      {openModalDeleteTask && (
        <ModalDeleteTask
          handleCloseModalDeleteTask={handleCloseModalDeleteTask}
        />
      )}

      <main className="main">
        <div className="wrapper">
          <h2 className="subtitle">Suas tarefas de hoje</h2>

          <div className="todoList">
            {tasks.map(
              (task) =>
                task.status === "IN_PROGRESS" && (
                  <ul className="tasks" key={task.id}>
                    <li className="task">
                      <input type="checkbox" className="checkbox" />
                      <span className="taskTitle">{task.description}</span>
                    </li>
                    <TrashSimple
                      size={20}
                      className="trashIcon"
                      onClick={handleOpenModalDeleteTask}
                    />
                  </ul>
                )
            )}
          </div>

          <h2 className="subtitle">Tarefas finalizadas</h2>

          <div className="todoList">
            {tasks.map(
              (task) =>
                task.status === "FINISHED" && (
                  <div className="tasks" key={task.id}>
                    <div className="task">
                      <input type="checkbox" className="checkbox" />
                      <span className="taskTitle">{task.description}</span>
                    </div>
                    <TrashSimple
                      size={20}
                      className="trashIcon"
                      onClick={handleOpenModalDeleteTask}
                    />
                  </div>
                )
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
