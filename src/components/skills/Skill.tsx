import skillProps from "../../types/skillType";
import { FC } from "react";
const Skill: FC<skillProps> = ({ name, children }) => {
  return (
    <div className="p-2 min-w-24  h-20 flex flex-col items-center shadow-lg shadow-gray-600 rounded-2xl">
      <div>{children}</div>

      <h1 className="text-sm text-main-blue">{name}</h1>
    </div>
  );
};

export default Skill;
