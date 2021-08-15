import React, { Fragment, useContext, useEffect, useState } from "react";
import Card from "../component/card.jsx";
import "../../styles/home.scss";
import { Context } from "../store/appContext.js";

const Species = () => {
	const { store, actions } = useContext(Context);
	const [species, setSpecies] = useState([]);

	useEffect(
		() => {
			if (store.species != []) {
				if (store.species) {
					setSpecies(
						store.species.map(specie => {
							return (
								<Card
									name={specie.name}
									key={specie.uid}
									title={specie.name}
									uid={specie.uid}
									type="species"
									description="Specie of the Star Wars Universe"
								/>
							);
						})
					);
				}
			}
		},
		[store.species]
	);
	return <Fragment>{species}</Fragment>;
};

export default Species;
