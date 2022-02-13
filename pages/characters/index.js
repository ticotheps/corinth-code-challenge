import Link from 'next/link';
import styles from '../../styles/CharactersPage.module.css';

export default function CharactersPage() {
	const characters = [];

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
