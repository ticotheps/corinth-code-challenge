import { useRouter } from 'next/router';
// import swapi_people_data from '../data/swapi_people_data.json';
import findCharacterNameByUrl from './findCharacterNameByUrl';

// returns a single-word description of the current page content
// and will be displayed on the user's browser tab
export default function getPageRouteStr() {
	const router = useRouter();
	const characterId = router.query.characterId;

	const fullRouteStr = router.route;
	const fullRouteArr = fullRouteStr.split('/');

	const pageRouteStr = fullRouteArr.slice(-1)[0];
	// capitalizes cleaned page route string
	const capitalizedPageRouteStr =
		pageRouteStr.charAt(0).toUpperCase() + pageRouteStr.slice(1);

	if (fullRouteStr === '/') {
		// sets page description in browser tab as 'Home'
		return 'Home';
	} else if (fullRouteStr.search(/[\[\]]/) !== -1) {
		// sets page description in browser tab as '<Character Name>'
		return findCharacterNameByUrl(characterId);
	} else {
		// sets page description in browser tab as 'route' from 'useRouter().route'
		return capitalizedPageRouteStr;
	}
}
