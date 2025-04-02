import Project from "./Project";
import bookish from "../../assets/bookish.png";
import chat from "../../assets/chat.png";
function Projects() {
  return (
    <div className="lg:ml-40 lg:mr-40 sm:ml-4  sm:mr-4" id="projects">
      <h1 className="text-center text-4xl font-bold ">My Projects</h1>
      <div className="flex sm:justify-center flex-col sm:flex-row sm:gap-10 gap-2">
        <Project
          name="BOOKISH"
          image={bookish}
          description=" Bookish is a fully functional eCommerce platform designed for buying and selling books online.
           It aims to provide a seamless shopping experience for users while empowering administrators with comprehensive management capabilities. 
           The platform caters to both logged-in users and guests, ensuring accessibility and flexibility for all types of customers."
          url="https://thebookish.online/home"
          features={[
            "Payment integration using paypal",
            "wallet integration ",
            "purchase without login",
            "admin-> full controll over products,sale and discount",
          ]}
          stack={["Node", "Express", "Mongodb"]}
          hosting="AWS"
        />
        <Project
          name="CHAT-APP"
          image={chat}
          description=" The Chat App is a dynamic real-time messaging platform designed to facilitate seamless communication between users. 
          Leveraging WebSocket technology, the app offers quick, responsive messaging with an intuitive user interface. 
          It supports individual conversations and ensures secure data handling, making it suitable for personal and professional communication."
          url="https://morison.shop/"
          features={[
            "Real time messaging powered by Socket.io",
            "User authentication using JWT ",
            "Persistant message storage",
            "Responsive design",
          ]}
          stack={["Node", "Express", "Mongodb", "React", "Tailwind CSS"]}
          hosting="RENDER.COM"
        />
      </div>
    </div>
  );
}

export default Projects;
