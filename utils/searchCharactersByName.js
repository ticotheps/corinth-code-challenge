import mock_data from '../data/mock_data.json';

export default function searchCharactersByName(query) {
	return new Promise((resolve) => {
		// helper function that searches for characters' names that contain
		// characters from the given query.
		function queryInCharName(charName, query) {
			return charName.toLowerCase().includes(query.toLowerCase());
		}

		// returns only those character objects whose names contain the
		// characters of the given query.
		const matchingCharObjects = mock_data.people.filter((character) => {
			return queryInCharName(character.name, query);
		});

		// returns a new array of objects that contain the 'name' and the 'url'
		// properties of the matching characters.
		const matchingCharNames = matchingCharObjects.map((character) => {
			return {
				name: character.name,
				url: character.url,
			};
		});

		setTimeout(() => {
			resolve(matchingCharNames);
		}, 500);
	});
}
