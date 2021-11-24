const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "https://www.swapi.tech/api",
			people: [],
			planets: [],
			vehicles: []
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
			}
		}
	};
};

export default getState;
