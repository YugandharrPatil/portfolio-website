import About from "./components/about";
import ContactForm from "./components/contact-form";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default async function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <hr id="about" className="hr" />
      <About />
      <hr id="skills" className="hr" />
      <Skills />
      <hr id="projects" className="hr" />
      <Projects />
      <hr id="contact" className="hr" />
      <ContactForm />
      <Footer />
    </>
  );
}
