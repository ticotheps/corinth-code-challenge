import Link from 'next/link';
import styles from '../styles/CharactersList.module.css';

export default function CharactersList(props) {
	const { characters } = props;

	return (
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
	);
}
