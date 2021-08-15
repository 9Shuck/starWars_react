import React, { Fragment, useContext, useEffect, useState } from "react";
import Card from "../component/card.jsx";
import "../../styles/home.scss";
import { Context } from "../store/appContext.js";

const Planets = () => {
	const { store, actions } = useContext(Context);
	const [planets, setPlanets] = useState([]);

	useEffect(
		() => {
			if (store.planets != []) {
				if (store.planets) {
					console.log(store.planets);
					setPlanets(
						store.planets.map(planet => {
							return (
								<Card
									name={planet.name}
									key={planet.uid}
									title={planet.name}
									uid={planet.uid}
									type="planets"
									description="A planet within the Star Wars universe"
								/>
							);
						})
					);
				}
			}
		},
		[store.planets]
	);
	return <Fragment>{planets}</Fragment>;
};

export default Planets;
