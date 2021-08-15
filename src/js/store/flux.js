const BASE_URL = "https://www.swapi.tech/api/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			species: [],
			speciesDetails: {},
			vehicles: [],
			vehiclesDetails: {},
			nextVehicles: "",
			planets: [],
			planetsDetails: {}
		},
		actions: {
			getSpecies: async () => {
				try {
					let response = await fetch(BASE_URL.concat("species/"));

					if (response.ok) {
						let responseAsJson = await response.json();
						setStore({ species: responseAsJson.results });
						console.log(responseAsJson.results);
					} else {
						throw new Error(response.statusText, "code:", response.status);
					}
				} catch (error) {
					console.log(error);
				}
			},
			getSpeciesDetails: uid => {
				fetch("https://www.swapi.tech/api/species/".concat(uid), { method: "GET" })
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ speciesDetails: responseAsJson });
						console.log(responseAsJson);
					});
			},
			getPlanets: async () => {
				try {
					let response = await fetch(BASE_URL.concat("planets/"));

					if (response.ok) {
						let responseAsJson = await response.json();
						setStore({ planets: responseAsJson.results });
						console.log(responseAsJson.results);
					} else {
						throw new Error(response.statusText, "code:", response.status);
					}
				} catch (error) {
					console.log(error);
				}
			},
			getPlanetsDetails: uid => {
				fetch("https://www.swapi.tech/api/planets/".concat(uid), { method: "GET" })
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ planetsDetails: responseAsJson });
						console.log(responseAsJson);
					});
			},
			getVehicles: async () => {
				try {
					let response = await fetch(BASE_URL.concat("vehicles/"));

					if (response.ok) {
						let responseAsJson = await response.json();
						setStore({ vehicles: responseAsJson.results });
						console.log(responseAsJson.results);
					} else {
						throw new Error(response.statusText, "code:", response.status);
					}
				} catch (error) {
					console.log(error);
				}
			},
			getVehiclesDetails: uid => {
				fetch("https://www.swapi.tech/api/vehicles/".concat(uid), { method: "GET" })
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ vehiclesDetails: responseAsJson });
						console.log(responseAsJson);
					});
			}
		}
	};
};

export default getState;
