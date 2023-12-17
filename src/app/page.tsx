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
			<Skills />
			<Projects />
			<ContactForm />
			<Footer />
		</>
	);
}
