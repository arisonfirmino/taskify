import TaskItem from "@/app/components/task-item";
import { Task } from "@prisma/client";
import { isToday, isYesterday } from "date-fns";
import { formatDate } from "../helpers/formatDate";

interface TaskslistProps {
  tasks: Task[];
}

const Taskslist = ({ tasks }: TaskslistProps) => {
  const groupedTasks = tasks.reduce((groups: Record<string, Task[]>, task) => {
    let key = "";

    if (isToday(new Date(task.created_at))) {
      key = "Hoje";
    } else if (isYesterday(new Date(task.created_at))) {
      key = "Ontem";
    } else {
      key = formatDate(new Date(task.created_at));
    }

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(task);

    return groups;
  }, {});

  return (
    <>
      {Object.entries(groupedTasks).map(([date, tasks]) => (
        <div key={date} className="space-y-2.5">
          <p className="pl-1.5 font-medium text-blue-500">{date}</p>
          <ul className="space-y-2.5">
            {tasks.map((task) => (
              <li key={task.id}>
                <TaskItem task={task} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Taskslist;
