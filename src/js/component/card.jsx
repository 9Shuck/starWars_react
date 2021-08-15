import React from "react";
import PropTypes from "prop-types";
import "../../styles/card.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Card = props => {
	const link = "/".concat(props.type, "/", props.uid);
	return (
		<div className="card">
			<img
				className="foto"
				src="https://cdn.pixabay.com/photo/2019/03/10/03/36/star-wars-4045413__480.jpg"
				alt=""
			/>
			<span>{props.name}</span>
			<Link to={link}>
				<button className="card-button" onClick="">
					See more
				</button>
			</Link>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string,
	title: PropTypes.string,
	uid: PropTypes.string,
	type: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string
};
export default Card;
