import Link from 'next/link';
import styles from '../../styles/Characters.module.css';

export default function CharactersPage() {
	const characters = [
		{
			id: 1,
			name: 'Luke Skywalker',
			height: '172',
			mass: '77',
			hair_color: 'blond',
			skin_color: 'fair',
			eye_color: 'blue',
			birth_year: '19BBY',
			gender: 'male',
			homeworld: 'https://swapi.dev/api/planets/1/',
			films: [
				'https://swapi.dev/api/films/1/',
				'https://swapi.dev/api/films/2/',
				'https://swapi.dev/api/films/3/',
				'https://swapi.dev/api/films/6/',
			],
			species: [],
			vehicles: [
				'https://swapi.dev/api/vehicles/14/',
				'https://swapi.dev/api/vehicles/30/',
			],
			starships: [
				'https://swapi.dev/api/starships/12/',
				'https://swapi.dev/api/starships/22/',
			],
			created: '2014-12-09T13:50:51.644000Z',
			edited: '2014-12-20T21:17:56.891000Z',
			url: 'https://swapi.dev/api/people/1/',
		},
		{
			id: 2,
			name: 'C-3PO',
			height: '167',
			mass: '75',
			hair_color: 'n/a',
			skin_color: 'gold',
			eye_color: 'yellow',
			birth_year: '112BBY',
			gender: 'n/a',
			homeworld: 'https://swapi.dev/api/planets/1/',
			films: [
				'https://swapi.dev/api/films/1/',
				'https://swapi.dev/api/films/2/',
				'https://swapi.dev/api/films/3/',
				'https://swapi.dev/api/films/4/',
				'https://swapi.dev/api/films/5/',
				'https://swapi.dev/api/films/6/',
			],
			species: ['https://swapi.dev/api/species/2/'],
			vehicles: [],
			starships: [],
			created: '2014-12-10T15:10:51.357000Z',
			edited: '2014-12-20T21:17:50.309000Z',
			url: 'https://swapi.dev/api/people/2/',
		},
		{
			id: 3,
			name: 'R2-D2',
			height: '96',
			mass: '32',
			hair_color: 'n/a',
			skin_color: 'white, blue',
			eye_color: 'red',
			birth_year: '33BBY',
			gender: 'n/a',
			homeworld: 'https://swapi.dev/api/planets/8/',
			films: [
				'https://swapi.dev/api/films/1/',
				'https://swapi.dev/api/films/2/',
				'https://swapi.dev/api/films/3/',
				'https://swapi.dev/api/films/4/',
				'https://swapi.dev/api/films/5/',
				'https://swapi.dev/api/films/6/',
			],
			species: ['https://swapi.dev/api/species/2/'],
			vehicles: [],
			starships: [],
			created: '2014-12-10T15:11:50.376000Z',
			edited: '2014-12-20T21:17:50.311000Z',
			url: 'https://swapi.dev/api/people/3/',
		},
	];

	return (
		<main className={styles.main}>
			<h1 className={styles.title}>Star Wars Characters</h1>

			<ul className={styles.cardContainer}>
				{characters.map((character) => (
					<Link href={`/characters/${character.id}`} key={character.id}>
						<div className={styles.card}>
							<p>{character.name}</p>
						</div>
					</Link>
				))}
			</ul>
		</main>
	);
}
