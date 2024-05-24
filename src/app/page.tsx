import ContactForm from "./components/contact-form";
import Footer from "./components/footer";
import Header from "./components/header";
import Hr from "./components/hr";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default async function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      {/* <Hr ID="skills" /> */}
      {/* <Skills /> */}
      {/* <Hr ID="projects" /> */}
      {/* <Projects /> */}
      {/* <Hr ID="contact" /> */}
      {/* <ContactForm /> */}
      <Footer />
    </>
  );
}
