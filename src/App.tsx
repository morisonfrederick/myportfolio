import Banner from "./components/Banner";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import SocialLinks from "./components/SocialLinks";
import Header from "./header/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="  ">
        <Header />
        <Banner />
        <SocialLinks />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
