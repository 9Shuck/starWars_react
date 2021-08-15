import React, { Fragment } from "react";
import "../../styles/home.scss";
import CarouselStarWars from "../component/carouselStarWars.jsx";

export const Home = () => (
	<Fragment>
		<div className="text-center mt-5 d-flex flex-column">
			<CarouselStarWars />
		</div>
	</Fragment>
);
