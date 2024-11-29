"use server";

import { db } from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

export const createNewTask = async ({
  userId,
  text,
}: {
  userId: string;
  text: string;
}) => {
  if (!userId) {
    throw new Error("Usuário não localizado.");
  }

  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new Error("Usuário não localizado.");
  }

  await db.task.create({
    data: {
      userId: user.id,
      text: text,
    },
  });

  revalidatePath("/");
};

export const updateTask = async ({ taskId }: { taskId: string }) => {
  if (!taskId) {
    throw new Error("Tarefa não encontrada.");
  }

  const task = await db.task.findUnique({
    where: {
      id: taskId,
    },
  });

  if (!task) {
    throw new Error("Tarefa não encontrada.");
  }

  if (task.isCompleted) {
    await db.task.update({
      where: {
        id: task.id,
      },
      data: {
        isCompleted: false,
      },
    });
  } else {
    await db.task.update({
      where: {
        id: task.id,
      },
      data: {
        isCompleted: true,
      },
    });
  }

  revalidatePath("/");
};

export const deleteTask = async ({ taskId }: { taskId: string }) => {
  if (!taskId) {
    throw new Error("Tarefa não encontrada.");
  }

  const task = await db.task.findUnique({
    where: {
      id: taskId,
    },
  });

  if (!task) {
    throw new Error("Tarefa não encontrada.");
  }

  await db.task.delete({
    where: {
      id: task.id,
    },
  });

  revalidatePath("/");
};
