import swapi_people_data from '../data/swapi_people_data.json';
import { useRouter } from 'next/router';

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
	const matchingCharactersArr = swapi_people_data.people.filter((character) => {
		return matchingCharacterById(character, desiredCharacterId);
	});

	if (matchingCharactersArr.length !== 0) {
		// returns a new array of ONE character object that contains the
		// 'desiredCharacterId' within it's 'url' property.
		const matchingCharacter = matchingCharactersArr[0];
		const matchingCharacterNameStr = matchingCharacter.name;

		return matchingCharacterNameStr;
	} else {
		const route = useRouter();
		const asPathCharId = route.asPath.split('/').slice(-1)[0];
		console.error(
			`DEV-ERROR-MSG: No existing character with requested id "${asPathCharId}"`
		);
	}
}
