import Link from 'next/link';
import styles from '../styles/CharacterItem.module.css';

export default function CharacterItem(props) {
	const { character } = props;

	return (
		<Link href={`/characters/${character.id}`} key={character.id}>
			<div className={styles.card}>
				<img src={character.image} alt={character.name} />
				<p>{character.name}</p>
			</div>
		</Link>
	);
}
