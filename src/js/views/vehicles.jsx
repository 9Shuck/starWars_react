import React, { Fragment, useContext, useEffect, useState } from "react";
import Card from "../component/card.jsx";
import "../../styles/home.scss";
import { Context } from "../store/appContext.js";

const Vehicles = () => {
	const { store, actions } = useContext(Context);
	const [vehicles, setVehicles] = useState([]);

	useEffect(
		() => {
			if (store.vehicles != []) {
				if (store.vehicles) {
					setVehicles(
						store.vehicles.map(vehicle => {
							return (
								<Card
									name={vehicle.name}
									key={vehicle.uid}
									title={vehicle.name}
									uid={vehicle.uid}
									type="vehicles"
									description="Vehicle of the Star Wars Universe"
								/>
							);
						})
					);
				}
			}
		},
		[store.vehicles]
	);
	return <Fragment>{vehicles}</Fragment>;
};

export default Vehicles;
