import Link from 'next/link';
import { getAllCharacters } from '../../dummy-data.js';
import styles from '../../styles/CharactersPage.module.css';

export default function CharactersPage() {
	const characters = getAllCharacters();

	return (
		<main className={styles.main}>
			<h1 className={styles.title}>Star Wars Characters</h1>

			<ul className={styles.cardContainer}>
				{characters.map((character) => (
					<Link href={`/characters/${character.id}`} key={character.id}>
						<div className={styles.card}>
							<img src={character.image} alt={character.name} />
							<p>{character.name}</p>
						</div>
					</Link>
				))}
			</ul>
		</main>
	);
}
