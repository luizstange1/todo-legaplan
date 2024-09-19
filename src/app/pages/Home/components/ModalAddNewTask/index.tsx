import "./styles.scss";

interface modalAddNewTaskProps {
  handleCloseModalNewTask: (arg0: boolean) => void;
}

export function ModalAddNewTask({
  handleCloseModalNewTask,
}: modalAddNewTaskProps) {
  return (
    <div className="modalOverlay">
      <div className="modal">
        <h1 className="newTaskModalTitle">Nova Tarefa</h1>
        <div className="containerNewTask">
          <span>Título</span>
          <input type="text" className="newTaskInput" placeholder="Digite" />
        </div>

        <div className="buttons">
          <button
            className="closeModalNewTask"
            onClick={() => handleCloseModalNewTask(false)}
          >
            Cancelar
          </button>
          <button className="addNewTaskButton">Adicionar</button>
        </div>
      </div>
    </div>
  );
}
