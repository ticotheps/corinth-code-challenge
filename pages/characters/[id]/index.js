import { useRouter } from 'next/router';

export default function CharacterPage() {
	const router = useRouter();

	console.log(router.query);
	console.log(router.pathname);

	return (
		<div>
			<h1>Han Solo</h1>
			<ul>
				<div>
					<h3>About Me:</h3>
					<ul>
						<li>Height: 6ft 1in</li>
						<li>Mass: 190 lbs</li>
						<li>Gender: Male</li>
						<li>Eye Color: Brown</li>
						<li>Hair Color: Brown</li>
						<li>Birth Year: 1951</li>
						<li>Species: Human</li>
						<li>Homeworld: Earth</li>
					</ul>
				</div>
				<div>
					<h3>Featured Films:</h3>
					<ul>
						<li>A New Hope</li>
						<li>The Empire Strikes Back</li>
					</ul>
				</div>
				<div>
					<h3>Starships Driven:</h3>
					<ul>
						<li>CR90 Corvette</li>
						<li>Star Destroyer</li>
						<li>Death Star</li>
					</ul>
				</div>
			</ul>
		</div>
	);
}
