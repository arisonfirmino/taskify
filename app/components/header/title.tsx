import Image from "next/image";

const Title = () => {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src="/logo.png"
        alt="Taskify Logo"
        height={355}
        width={355}
        className="w-[30px]"
      />
      <h1 className="text-xl font-bold text-blue-500">Taskify</h1>
    </div>
  );
};

export default Title;
