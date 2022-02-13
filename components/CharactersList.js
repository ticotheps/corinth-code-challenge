import CharacterItem from './CharacterItem';
import styles from '../styles/CharactersList.module.css';

export default function CharactersList(props) {
	const { characters } = props;

	return (
		<ul className={styles.cardContainer}>
			{characters.map((character) => (
				<CharacterItem character={character} />
			))}
		</ul>
	);
}
