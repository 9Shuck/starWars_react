import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import NavBar from "./component/navBar.jsx";
import Footer from "./component/footer.jsx";
import Modal from "./component/modal.jsx";
import Species from "./views/species.jsx";
import Vehicles from "./views/vehicles.jsx";
import Planets from "./views/planets.jsx";
import speciesDetails, { SpeciesDetails } from "./views/speciesDetails.jsx";
import vehiclesDetails, { VehiclesDetails } from "./views/vehiclesDetails.jsx";
import planetsDetails, { PlanetsDetails } from "./views/planetsDetails.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Modal} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/species" component={Species} />
					<Route exact path="/species/:id" component={SpeciesDetails} />
					<Route exact path="/vehicles" component={Vehicles} />
					<Route exact path="/vehicles/:id" component={VehiclesDetails} />
					<Route exact path="/planets" component={Planets} />
					<Route exact path="/planets/:id" component={PlanetsDetails} />
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
