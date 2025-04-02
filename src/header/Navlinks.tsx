import Mybutton from "../components/Mybutton";

function Navlinks() {
  return (
    <>
      <a href="#">
        <Mybutton>Home</Mybutton>
      </a>
      <a href="#about">
        <Mybutton>About me</Mybutton>
      </a>
      <a href="#skills">
        <Mybutton>Skills</Mybutton>
      </a>
      <a href="#projects">
        <Mybutton>Projects</Mybutton>
      </a>
      <a href="#contacts">
        <Mybutton bg_color="bg-main-yellow" text_color="text-white">
          Contact me
        </Mybutton>
      </a>
    </>
  );
}

export default Navlinks;
