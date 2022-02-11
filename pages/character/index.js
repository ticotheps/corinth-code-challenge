import Link from 'next/link';

export default function CharactersListPage() {
	const characters = [
		{
			id: 1,
			name: 'Luke Skywalker',
		},
		{
			id: 2,
			name: 'C-3PO',
		},
		{
			id: 3,
			name: 'R2-D2',
		},
		{
			id: 4,
			name: 'Darth Vader',
		},
	];
	return (
		<div>
			<h1>Star Wars Characters</h1>
			<div>
				<ul>
					{characters.map((character) => (
						<li key={character.id}>
							<Link href={`/character/${character.id}`}>{character.name}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
