"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CircleArrowUpIcon, LoaderCircleIcon } from "lucide-react";
import { createNewTask } from "@/app/actions/task";

const schema = yup.object({
  text: yup.string().required(),
});

type FormData = yup.InferType<typeof schema>;

const NewTask = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    if (session) {
      setIsLoading(true);

      await createNewTask({ userId: session.user.id, text: data.text });

      setIsLoading(false);
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center gap-2.5"
    >
      <input
        type="text"
        placeholder="Nova tarefa"
        {...register("text")}
        className={`w-full rounded-lg border border-solid border-gray-400 bg-transparent px-2.5 py-1.5 outline-none focus:ring-1 ${errors.text ? "border-red-600 ring-red-600" : "ring-blue-500"}`}
      />
      <button
        type="submit"
        disabled={isLoading}
        className={`rounded-lg p-1.5 text-white ${isLoading ? "cursor-not-allowed bg-gray-400" : "bg-blue-500"}`}
      >
        {isLoading ? (
          <LoaderCircleIcon size={14} className="animate-spin" />
        ) : (
          <CircleArrowUpIcon size={14} />
        )}
      </button>
    </form>
  );
};

export default NewTask;
