import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/carousel.scss";

const CarouselStarWars = () => {
	return (
		<div className="myCarousel">
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://wallpaperaccess.com/full/340949.jpg"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://images4.alphacoders.com/190/19098.jpg"
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://i.pinimg.com/originals/57/1b/ed/571bed61046e085aa23e45d8c3f27dbf.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default CarouselStarWars;
