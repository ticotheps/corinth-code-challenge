import { getAllCharacters } from '../../dummy-data.js';
import CharactersList from '../../components/CharactersList';
import styles from '../../styles/CharactersPage.module.css';

export default function CharactersPage() {
	const characters = getAllCharacters();

	return (
		<main className={styles.main}>
			<h1 className={styles.title}>Star Wars Characters</h1>
			<CharactersList characters={characters} />
		</main>
	);
}
