import Connect from "./components/connect";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default async function HomePage() {
	return (
		<>
			<Navbar />
			<Header heading="Header" />
			<Skills heading="Skills" />
			<Projects heading="Projects" />
			<Connect heading="Connect With Me!" />
			<Footer />
		</>
	);
}
