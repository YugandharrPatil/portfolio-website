import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
	return (
		<>
			<footer className="bg-slate-900">
				<main className="w-5/6 mx-auto">This is some footer content</main>
				<FontAwesomeIcon icon={faCheck} className="fas fa-check" style={{ fontSize: 20 }} /> {/* color: "red"*/}
			</footer>
		</>
	);
}
