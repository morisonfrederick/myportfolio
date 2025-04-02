import Nav from "./Nav";
import logo from "../assets/logo.png";
function Header() {
  return (
    <>
      <div className="flex justify-between lg:ml-40 lg:mr-40 mt-4 ml-2  max-w-full sm:ml-2  sm:mr-2    ">
        <img src={logo} alt="" width={40} />
        <Nav />
      </div>
    </>
  );
}

export default Header;
