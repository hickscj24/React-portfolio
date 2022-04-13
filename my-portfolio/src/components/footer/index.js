import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/hickscj24"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/github logo.png")}
						alt="Github"
						className="pics"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/cody-hicks-80578421a/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/Linkedin-logo.png")}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				
			</div>
		</footer>
	);
}

export default Footer;