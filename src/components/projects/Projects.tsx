import Project from "./Project";
import bookish from "../../assets/bookish.png";
import books from "../../assets/books.png";
import book from "../../assets/bookdetails.png";
import wishlist from "../../assets/wishlist.png";
import cart from "../../assets/cart.png";
import admin from "../../assets/admin.png";

import chat from "../../assets/chat.png";
function Projects() {
  return (
    <div className="lg:ml-40 lg:mr-40 sm:ml-4  sm:mr-4" id="projects">
      <h1 className="text-center text-4xl font-bold ">My Projects</h1>
      <div className="">
        <Project
          name="BOOKISH"
          images={[
            { heading: "Home", urls: bookish },
            { heading: "Books", urls: books },
            { heading: "Book", urls: book },
            { heading: "Wish list", urls: wishlist },
            { heading: "Cart", urls: cart },
            { heading: "Admin", urls: admin },
          ]}
          description=" Bookish is a fully functional eCommerce platform designed for buying and selling books online. 
          It offers a seamless shopping experience with essential features like advanced filtering, wishlist, cart, and flexible payment options. 
          The platform supports both guest checkouts and registered users. 
          It also empowers administrators with complete control over inventory, sales, discounts, and detailed reporting through a dedicated admin console."
          url="https://thebookish.online/home"
          features={[
            "Responsive UI built with EJS and Bootstrap",
            "Secure user authentication with email OTP verification using Nodemailer",
            "Purchase without login (guest checkout support)",
            "Advanced product filtering, wishlist, and shopping cart",
            "Payment integration using PayPal and Cash on Delivery (COD)",
            "Integrated wallet system for managing returns and cancellations",
            "Admin dashboard with full control over products, stock, sales, discounts, statistics, and report downloads",
          ]}
          stack={["Node", "Express", "MongoDB (with Mongoose)"]}
          hosting="AWS"
          githubURL="https://github.com/morisonfrederick/bookish"
        />
        <Project
          name="CHAT-APP"
          images={[{ heading: "Home", urls: chat }]}
          description=" The Chat App is a dynamic real-time messaging platform designed to facilitate seamless communication between users. 
          Leveraging WebSocket technology, the app offers quick, responsive messaging with an intuitive user interface. 
          It supports individual conversations and ensures secure data handling, making it suitable for personal and professional communication."
          url="https://morison.shop/"
          features={[
            "Real time messaging powered by Socket.io",
            "Persistant message storage",
            "Secure user authentication with JWT (access & refresh tokens)",
            "Global state management with Redux",
            "Image uploads with Multer and server-side storage",
            "Admin panel to manage users and projects",
            "Axios interceptors for token handling",
            "Responsive UI with React and Tailwind CSS",
          ]}
          stack={["Node", "Express", "Mongodb", "React", "Tailwind CSS"]}
          hosting="RENDER.COM"
          githubURL="https://github.com/morisonfrederick/chat_app"
        />
      </div>
    </div>
  );
}

export default Projects;
