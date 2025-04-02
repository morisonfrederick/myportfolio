import Skill from "./Skill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs } from "@fortawesome/free-brands-svg-icons";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiExpress, SiMongodb, SiFlask } from "react-icons/si";
import { TbBrandRedux, TbBrandMysql } from "react-icons/tb";

function Skills() {
  return (
    <div className="mt-10 mb-10 lg:ml-40 lg:mr-40 sm:ml-2  sm:mr-2" id="skills">
      <div className="mt-10">
        <h1 className="text-center text-4xl font-bold">My Skills</h1>
      </div>
      <div className="mt-10 flex overflow-x-scroll no-scrollbar p-4 sm:gap-9 gap-5">
        <Skill name="HTML">
          <FaHtml5 size={45} color="#E34F26" />
        </Skill>
        <Skill name="CSS">
          <FaCss3Alt size={45} color="" />
        </Skill>
        <Skill name="JAVASCRIPT">
          <IoLogoJavascript size={45} color="#264DE4" />
        </Skill>
        <Skill name="TYPESCRIPT">
          <SiTypescript size={45} color="#3178C6" />
        </Skill>
        <Skill name="TAILWIND">
          <RiTailwindCssFill size={45} color="#06B6D4" />
        </Skill>
        <Skill name="BOOTSTRAP">
          <FaBootstrap size={45} color="#7952B3" />
        </Skill>
        <Skill name="NODE ">
          <FaNodeJs size={45} color="#5FA04E" />
        </Skill>
        <Skill name="EXPRESS">
          <SiExpress size={45} color="#000000" />
        </Skill>
      </div>
      <div className="mt-10 flex overflow-x-scroll no-scrollbar p-4 gap-5">
        <Skill name="REACT">
          <FaReact size={45} color="#61DAFB" />
        </Skill>
        <Skill name="REDUX">
          <TbBrandRedux size={45} color="#7952B3" />
        </Skill>
        <Skill name="MONGODB">
          <SiMongodb size={45} color="#47A248" />
        </Skill>
        <Skill name="MYSQL">
          <TbBrandMysql size={45} color="##4479A1" />
        </Skill>
        <Skill name="GIT">
          <FaGitAlt size={45} color="#F05032" />
        </Skill>
        <Skill name="GITHUB">
          <FaGithub size={45} color="#181717" />
        </Skill>
        <Skill name="AWS">
          <FaAws size={45} color="#232F3E" />
        </Skill>
        <Skill name="PYTHON">
          <FaPython size={45} color="#3776AB" />
        </Skill>
        <Skill name="FLASK">
          <SiFlask size={45} color="" />
        </Skill>
      </div>
    </div>
  );
}

export default Skills;
