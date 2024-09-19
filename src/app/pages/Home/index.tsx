"use client";

import { TrashSimple } from "@phosphor-icons/react/dist/ssr";
import "./styles.scss";
import { ModalAddNewTask } from "./components/ModalAddNewTask";
import { useState } from "react";

export function Tasks() {
  const [openModalNewTask, setOpenModalNewTask] = useState(false);

  function handleOpenModalNewTask() {
    setOpenModalNewTask(true);
  }

  function handleCloseModalNewTask() {
    setOpenModalNewTask(false);
  }

  return (
    <>
      {openModalNewTask && (
        <ModalAddNewTask handleCloseModalNewTask={handleCloseModalNewTask} />
      )}

      <main className="main">
        <div className="wrapper">
          <h2 className="subtitle">Suas tarefas de hoje</h2>

          <div className="todo__list">
            <div className="tasks">
              <div className="task">
                <input type="checkbox" className="checkbox" />
                <span className="task__title">Lavar as mãos </span>
              </div>
              <TrashSimple size={20} className="trash__icon" />
            </div>

            <div className="tasks">
              <div className="task">
                <input type="checkbox" className="checkbox" />
                <span className="task__title">Lavar as mãos </span>
              </div>
              <TrashSimple size={20} className="trash__icon" />
            </div>

            <div className="tasks">
              <div className="task">
                <input type="checkbox" className="checkbox" />
                <span className="task__title">Lavar as mãos </span>
              </div>
              <TrashSimple size={20} className="trash__icon" />
            </div>
          </div>

          <h2 className="subtitle">Tarefas finalizadas</h2>

          <div className="tasks">
            <div className="task">
              <input type="checkbox" className="checkbox" />
              <span className="task__title">Lavar as mãos </span>
            </div>
            <TrashSimple size={20} className="trash__icon" />
          </div>
        </div>

        <button className="addTask__button" onClick={handleOpenModalNewTask}>
          Adicionar nova tarefa
        </button>
      </main>
    </>
  );
}
