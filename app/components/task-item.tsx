import { Task } from "@prisma/client";
import DeleteTaskButton from "@/app/components/delete-task-button";
import CheckTaskButton from "@/app/components/check-task-button";

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <div className="flex w-full items-center justify-between gap-2.5 rounded-lg border border-solid border-gray-200 bg-white px-2.5 py-1.5 shadow duration-500 hover:scale-105">
      <p
        className={`truncate lowercase ${task.isCompleted ? "text-gray-400 line-through" : ""}`}
      >
        {task.text}
      </p>
      <div className="flex items-center gap-2.5">
        <CheckTaskButton id={task.id} isCompleted={task.isCompleted} />
        <DeleteTaskButton id={task.id} />
      </div>
    </div>
  );
};

export default TaskItem;
