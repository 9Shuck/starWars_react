import React from "react";
import { Fragment } from "react";
import "./../../styles/modal.scss";

const Modal = () => {
	return (
		<Fragment>
			<div className="modalBody">
				<div className="fade" />

				<div id="intro">
					{" "}
					A long time ago, in a galaxy far,
					<br /> far away....
				</div>
				<div id="logo" />
				<div id="scroller">
					<div>
						<p>
							It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their
							first victory against the evil Galactic Empire.
						</p>
						<p>
							During the battle, Rebel spies managed to steal secret plans to the Empires ultimate weapon,
							the DEATH STAR, an armored space station with enough power to destroy an entire planet.
						</p>
						<p>
							Pursued by the Empires sinister agents, Princess Leia races home aboard her starship,
							custodian of the stolen plan that can save her people and restore freedom to the galaxy....
						</p>
						<p>
							<span className="thanks">Made with ❤️ by Ruben Lucas and Yevhen</span>
						</p>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Modal;
