import Link from 'next/link';
import styles from '../styles/CharacterItem.module.css';

export default function CharacterItem(props) {
	const { id, image, name } = props.character;
	const characterDetailsPageLink = `/characters/${id}`;

	return (
		<Link href={characterDetailsPageLink} key={id}>
			<div className={styles.card}>
				<img src={image} alt={name} />
				<p>{name}</p>
			</div>
		</Link>
	);
}
