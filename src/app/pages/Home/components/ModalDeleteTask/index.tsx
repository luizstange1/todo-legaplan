import { useTasks } from "@/app/hooks/useTasks";
import "./styles.scss";

interface modalDeleteTask {
  handleCloseModalDeleteTask: (arg0: boolean) => void;
}

export function ModalDeleteTask({
  handleCloseModalDeleteTask,
}: modalDeleteTask) {
  return (
    <div className="modalOverlay">
      <div className="modal">
        <h1 className="deleteTaskModalTitle">Deletar Tarefa</h1>
        <span>Tem certeza que você deseja deletar essa tarefa?</span>

        <div className="buttons">
          <button
            className="closeModalDeleteTaskButton"
            onClick={() => handleCloseModalDeleteTask(false)}
          >
            Cancelar
          </button>
          <button className="deleteTaskButton">Deletar</button>
        </div>
      </div>
    </div>
  );
}
