import Header from "@/app/components/header/header";
import NewTask from "@/app/components/new-task";
import { db } from "@/app/lib/prisma";
import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import Taskslist from "@/app/components/tasks-list";
import TaskEmptyState from "@/app/components/task-empty-state";

const Home = async () => {
  const session = await getServerSession(authOptions);

  let user = null;

  if (session) {
    user = await db.user.findUnique({
      where: {
        id: session?.user.id,
      },
      include: {
        tasks: {
          orderBy: {
            created_at: "desc",
          },
        },
      },
    });
  }

  return (
    <main className="flex flex-col items-center justify-center gap-5 pb-10 pt-40 text-sm">
      <Header />
      {!session && (
        <p className="px-5 text-center text-base text-gray-600 md:px-0">
          faça login para criar e acompanhar suas tarefas facilmente!
        </p>
      )}
      <section
        className={`w-full space-y-5 px-5 md:max-w-80 md:px-0 ${!session ? "pointer-events-none opacity-50" : ""}`}
      >
        <NewTask />
        {user &&
          (user.tasks.length === 0 ? (
            <TaskEmptyState />
          ) : (
            <Taskslist tasks={user.tasks} />
          ))}
      </section>
    </main>
  );
};

export default Home;
