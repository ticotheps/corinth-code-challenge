import { useRouter } from 'next/router';

// returns a single-word description of the current page content
// and will be displayed on the user's browser tab
export default function getPageRouteStr() {
	const router = useRouter();

	const fullRouteStr = router.route;
	// console.log({ fullRouteStr });

	const fullRouteArr = fullRouteStr.split('/');
	// console.log({ fullRouteArr });

	const pageRouteStr = fullRouteArr.slice(-1)[0];
	// console.log({ pageRouteStr });

	// const profilePageRouteStr = window.localStorage.getItem('charName');
	const profilePageRouteStr = '<Star Wars Character Name Here>';
	// console.log({ profilePageRouteStr });

	// capitalizes cleaned page route string
	const capPageRouteStr =
		pageRouteStr.charAt(0).toUpperCase() + pageRouteStr.slice(1);

	if (fullRouteStr === '/') {
		return 'Home';
	} else if (fullRouteStr.search(/[\[\]]/) !== -1) {
		return profilePageRouteStr;
	} else {
		// console.log({ capPageRouteStr });
		return capPageRouteStr;
	}
}
