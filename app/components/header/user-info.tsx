import Image from "next/image";

interface UserInfoProps {
  name: string;
  email: string;
  image: string;
}

const UserInfo = ({ name, email, image }: UserInfoProps) => {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src={image}
        alt={name}
        height={1024}
        width={1024}
        className="h-10 w-10 rounded-full"
      />
      <div>
        <h3 className="text-base font-semibold">{name}</h3>
        <p className="text-gray-400">{email}</p>
      </div>
    </div>
  );
};

export default UserInfo;
