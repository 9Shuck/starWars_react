import React from "react";
import "../../styles/iconBar.scss";

const IconBar = () => {
	return (
		<div className="iconContainer">
			<a href="https://twitter.com/starwars%22%3E">
				<i className="fab fa-twitter fa-2x" />
			</a>
			<a href="https://www.facebook.com/starwars.es/?brand_redir=169299103121699%22%3E">
				<i className="fab fa-facebook fa-2x" />
			</a>
			<a href="https://www.instagram.com/starwars/%22%3E">
				<i className="fab fa-instagram fa-2x" />
			</a>
			<a href="https://www.youtube.com/user/starwars%22%3E">
				<i className="fab fa-youtube fa-2x" />
			</a>
		</div>
	);
};

export default IconBar;
