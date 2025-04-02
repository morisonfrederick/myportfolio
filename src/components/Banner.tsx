import Mybutton from "./Mybutton";
import banner from "../assets/banner.svg";

function Banner() {
  return (
    <>
      <div
        className="flex flex-col sm:flex-row lg:ml-40 lg:mr-40  sm:mt-10 sm:ml-2  sm:mr-2"
        id="about"
      >
        {/* section for  content */}
        <div className=" sm:w-1/2 p-2 sm:mt-3">
          <h1 className="font-extrabold">Hi, I am</h1>
          <h2 className="font-extrabold text-2xl text-main-blue mt-2">
            Morison Frederick
          </h2>
          <div className="flex flex-col justify-between mt-2">
            <h3 className="sm:text-6xl text-4xl font-bold text-main-yellow text-center mr-[20%] ">
              Full Stack
            </h3>
            <h3
              className="sm:text-6xl text-4xl font-bold text-main-yellow text-center ml-[20%]
            "
            >
              Developer
            </h3>
          </div>

          <p className="mt-2 font-display">
            As a full-stack developer, I have seamlessly bridge the gap between
            frontend and backend, crafting user-friendly interfaces with elegant
            code. My expertise extends from creating intuitive user experiences
            to optimizing server-side functionality. With a keen eye for design
            and a knack for problem-solving, I bring a holistic approach to web
            development. My passion for staying abreast of the latest
            technologies ensures that your projects are not just functional but
            cutting-edge.
          </p>
          <div className="flex gap-4 justify-center mt-2">
            <a href="/Morison_CV.pdf" download="Morison_cv.pdf">
              <Mybutton bg_color="bg-main-yellow" text_color="text-white">
                Download CV
              </Mybutton>
            </a>
          </div>
        </div>

        {/* section for image  */}
        <div className=" sm:w-1/2">
          <img src={banner} alt="some image" />
        </div>
      </div>
    </>
  );
}

export default Banner;
