"use client";

import { useState } from "react";
import {
  CheckCheckIcon,
  CircleCheckIcon,
  LoaderCircleIcon,
} from "lucide-react";
import { updateTask } from "@/app/actions/task";

const CheckTaskButton = ({
  id,
  isCompleted,
}: {
  id: string;
  isCompleted: boolean;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckTaskClick = async () => {
    setIsLoading(true);

    await updateTask({ taskId: id });

    setIsLoading(false);
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleCheckTaskClick}
      className={isCompleted ? "text-green-500" : "text-blue-500"}
    >
      {isLoading ? (
        <LoaderCircleIcon size={14} className="animate-spin" />
      ) : isCompleted ? (
        <CheckCheckIcon size={14} />
      ) : (
        <CircleCheckIcon size={14} />
      )}
    </button>
  );
};

export default CheckTaskButton;
