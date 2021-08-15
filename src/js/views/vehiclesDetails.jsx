import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/details.scss";

export const VehiclesDetails = () => {
	const { store, actions } = useContext(Context);
	const [vehiclesDetails, setVehiclesDetails] = useState([]);
	const params = useParams();

	useEffect(() => {
		actions.getVehiclesDetails(params.id);
	}, []);

	useEffect(
		() => {
			if (store.vehiclesDetails.result != undefined) {
				setVehiclesDetails(
					<>
						<h2>{store.vehiclesDetails.result.properties.name}</h2>
						<ul>
							<li>Starship class: {store.vehiclesDetails.result.properties.starship_class}</li>
							<li>Manufacturer: {store.vehiclesDetails.result.properties.manufacturer}</li>
							<li>Cost in credits: {store.vehiclesDetails.result.properties.cost_in_credits}</li>
							<li>Length: {store.vehiclesDetails.result.properties.length}</li>
							<li>Crew: {store.vehiclesDetails.result.properties.crew}</li>
							<li>
								Max atmosphering speed: {store.vehiclesDetails.result.properties.max_atmosphering_speed}
							</li>
							<li>Cargo capacity: {store.vehiclesDetails.result.properties.cargo_capacity}</li>
							<li>Consumables: {store.vehiclesDetails.result.properties.consumables}</li>
						</ul>
					</>
				);
			}
		},
		[store.vehiclesDetails]
	);

	return (
		<div className="container-fluid containerDetails">
			<div className="row">
				<div className="col-8">
					<img
						className="detail-photo"
						src="https://cdn.pixabay.com/photo/2019/03/10/03/36/star-wars-4045413__480.jpg"
					/>
				</div>
				<div className="detail-text col-4 d-flex flex-column">
					{vehiclesDetails != "" ? (
						vehiclesDetails
					) : (
						<div className="spinner-border text-warning m-auto" role="status">
							<span className="sr-only">Loading...</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
