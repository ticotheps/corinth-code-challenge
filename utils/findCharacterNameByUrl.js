import mock_data from '../data/mock_data.json';

export default function findCharacterNameByUrl(desiredCharacterId) {
	// return new Promise((resolve) => {
	// helper function that searches for an id match between the id in a character's
	// 'url' property and the given 'desired_id'.
	function matchingCharacterById(character, desiredCharacterId) {
		const localDataCharacterId = character.url.split('/').slice(-2)[0];
		return localDataCharacterId === desiredCharacterId;
	}

	// returns only those character objects whose 'url' properties
	// contain the same id as the given 'desiredCharacterId' param.
	const matchingCharactersArr = mock_data.people.filter((character) => {
		return matchingCharacterById(character, desiredCharacterId);
	});

	// returns a new array of ONE character object that contains the
	// 'desiredCharacterId' within it's 'url' property.
	const matchingCharacter = matchingCharactersArr[0];
	const matchingCharacterNameStr = matchingCharacter.name;

	return matchingCharacterNameStr;
}
