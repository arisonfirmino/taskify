import { ClipboardListIcon } from "lucide-react";

const TaskEmptyState = () => {
  return (
    <div className="flex flex-col items-center gap-1.5 text-gray-600">
      <ClipboardListIcon size={32} className="text-blue-500" />
      <p>Sua lista de tarefas está vazia.</p>
      <p>Organize seu dia criando sua primeira tarefa!</p>
    </div>
  );
};

export default TaskEmptyState;
