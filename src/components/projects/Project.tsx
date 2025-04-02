import { FC } from "react";
import ProjectProps from "../../types/projectTpe";
import Mybutton from "../Mybutton";
const Project: FC<ProjectProps> = ({
  name,
  image,
  features,
  url,
  hosting,
  description,
  stack,
}) => {
  const onpenSiteLink = () => {
    window.open(url);
  };
  return (
    <div className="h-auto sm:w-72 w-full rounded-md shadow-2xl shadow-blue-900 mb-6 mt-6 p-2">
      <div
        className="h-10 bg-main-blue flex justify-center cursor-pointer"
        onClick={onpenSiteLink}
      >
        <h1 className="font-bold text-center mt-2 text-white">{name}</h1>
      </div>
      <img src={image} alt="bookish image" />

      <h1 className="mt-2">
        Hosted on <span className="font-semibold">{hosting}</span>
      </h1>
      <details>
        <summary>click to view details</summary>
        <div>
          <h1 className="text-main-blue">Discription</h1>
          <p> {description}</p>
          <h1 className="mt-2 text-main-blue">features</h1>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
          <h1 className="mt-2 text-main-blue">Stack</h1>
          {stack.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
        <Mybutton
          bg_color="bg-main-yellow"
          text_color="text-white"
          cb={onpenSiteLink}
        >
          site link
        </Mybutton>
      </details>
    </div>
  );
};

export default Project;
