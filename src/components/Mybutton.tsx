import { FC } from "react";
import ButtonProps from "../types/buttonType";

const Mybutton: FC<ButtonProps> = ({ bg_color, cb, text_color, children }) => {
  return (
    <div
      className={`${bg_color} ${text_color}  pl-6 pr-6 p-2 rounded-l-full rounded-r-full cursor-pointer text-center`}
      onClick={cb}
    >
      {children}
    </div>
  );
};

export default Mybutton;
