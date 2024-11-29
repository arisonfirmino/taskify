"use client";

import { useState } from "react";
import { LoaderCircleIcon, Trash2Icon } from "lucide-react";
import { deleteTask } from "@/app/actions/task";

const DeleteTaskButton = ({ id }: { id: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteTaskClick = async () => {
    setIsLoading(true);

    await deleteTask({ taskId: id });

    setIsLoading(false);
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleDeleteTaskClick}
      className={
        isLoading
          ? "cursor-not-allowed text-gray-400"
          : "text-blue-500 hover:text-red-600"
      }
    >
      {isLoading ? (
        <LoaderCircleIcon size={14} className="animate-spin" />
      ) : (
        <Trash2Icon size={14} />
      )}
    </button>
  );
};

export default DeleteTaskButton;
