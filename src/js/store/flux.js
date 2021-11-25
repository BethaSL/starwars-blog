import { end } from "@popperjs/core";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "https://www.swapi.tech/api",
			people: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			//Gets info from de API
			getData: async endpoint => {
				try {
					const store = getStore();
					const response = await fetch(`${store.urlBase}/${endpoint}`);
					if (response.ok) {
						const data = await response.json();
						setStore({
							...store,
							[endpoint]: data.results
						});
					}
				} catch (error) {
					console.log("Oh no!");
				}
			},
			addFavorites: (name, endpoint) => {
				const store = getStore();
				let person;
				if (endpoint == "people") {
					person = store.people.find(item => {
						return item.name == name;
					});
				} else if (endpoint == "planets") {
					person = store.planets.find(item => {
						return item.name == name;
					});
				} else {
					person = store.vehicles.find(item => {
						return item.name == name;
					});
				}
				setStore({ ...store, favorites: [...store.favorites, person] });
			}
		}
	};
};

export default getState;
