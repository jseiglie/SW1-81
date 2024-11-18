const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://www.swapi.tech/api',
			people:[],
			character: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			getPeople: async () => {
				try {
					const resp = await fetch(getStore().url+'/people');
					if (!resp.ok) throw new Error('Error fetching people');
					const data =  await resp.json();
					setStore({people: data.results});
				} catch (error) {
					console.error(error);				
				}
			},
			getOne: async (uid) => {
				try {
					const resp = await fetch(getStore().url+'/people/'+uid);
					if (!resp.ok) throw new Error('Error fetching character');
					const data =  await resp.json();
					setStore({character: data.result});
				} catch (error) {
					console.error(error);				
				}
			},
		}
	};
};

export default getState;
