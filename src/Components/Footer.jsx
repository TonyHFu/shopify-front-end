import React from "react";
import "./styles/Footer.scss";

function Footer() {
	return (
		<footer>
			<span>Created by Tony Fu (2022)</span>
			<div id="links">
				<a href="https://github.com/TonyHFu/" target="_blank">
					<i className="fa-brands fa-github-alt"></i>
				</a>
				<a href="https://www.linkedin.com/in/tonyhfu/" target="_blank">
					<i className="fa-brands fa-linkedin-in"></i>
				</a>
				<a href="https://tonyfu.netlify.app/" target="_blank">
					<i className="fa-solid fa-globe"></i>
				</a>
			</div>
		</footer>
	);
}

export default Footer;
