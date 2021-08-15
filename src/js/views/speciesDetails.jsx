import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/details.scss";

export const SpeciesDetails = () => {
	const { store, actions } = useContext(Context);
	const [speciesDetails, setSpeciesDetails] = useState([]);
	const params = useParams();

	useEffect(() => {
		actions.getSpeciesDetails(params.id);
	}, []);

	useEffect(
		() => {
			if (store.speciesDetails.result != undefined) {
				setSpeciesDetails(
					<>
						<h2>{store.speciesDetails.result.properties.name}</h2>
						<ul>
							<li>Average lifespan: {store.speciesDetails.result.properties.average_lifespan}</li>
							<li>Classification: {store.speciesDetails.result.properties.classification}</li>
							<li>Eye colors: {store.speciesDetails.result.properties.eye_colors}</li>
							<li>Hair colors: {store.speciesDetails.result.properties.hair_colors}</li>
							<li>Homeworld: {store.speciesDetails.result.properties.homeworld}</li>
							<li>Language: {store.speciesDetails.result.properties.language}</li>
						</ul>
					</>
				);
			}
		},
		[store.speciesDetails]
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
					{speciesDetails != "" ? (
						speciesDetails
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
