import { FC } from "react";
import ProjectProps from "../../types/projectTpe";
import Mybutton from "../Mybutton";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

const Project: FC<ProjectProps> = ({
  name,
  images,
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
    <div className="mt-5">
      <div
        className="h-10 bg-main-blue flex justify-center cursor-pointer"
        onClick={onpenSiteLink}
      >
        <h1 className="font-bold text-center mt-2 text-white">{name}</h1>
      </div>
      <div className="flex sm:flex-row-reverse flex-col p-2 ">
        <div className="flex sm:w-1/2  overflow-y-scroll no-scrollbar gap-5 border border-amber-300 rounded-2xl shadow-2xl  ml-2">
          {images?.map((image, index) => (
            <div key={index} className="flex-none w-full">
              <div className="flex gap-8 items-center text-center justify-center">
                <FaAnglesLeft />
                <h1>{image.heading}</h1>
                <FaAnglesRight />
              </div>

              <img src={image.urls} className="" alt="bookish image" />
            </div>
          ))}
        </div>
        <div className="sm:w-1/2 flex flex-col justify-between">
          <h1 className="mt-2">
            Hosted on <span className="font-semibold">{hosting}</span>
          </h1>

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
            text_color="text-black"
            cb={onpenSiteLink}
          >
            Live Demo
          </Mybutton>
        </div>
      </div>
    </div>
  );
};

export default Project;
