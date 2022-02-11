import Link from 'next/link';
import styles from '../../styles/Home.module.css';

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
		<div className={styles.container}>
			<h1 className={styles.title}>Star Wars Characters</h1>

			<ul className={styles.cardContainer}>
				{characters.map((character) => (
					<Link href={`/character/${character.id}`} key={character.id}>
						<div className={styles.card}>
							<p>{character.name}</p>
						</div>
					</Link>
				))}
			</ul>
		</div>
	);
}
