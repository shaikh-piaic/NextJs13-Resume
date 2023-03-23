import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Hireme from "./components/Hireme";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Skills />
			{/* <Hireme /> */}
			<Project />
			<Contact />
			<Footer />
		</>
	);
}
