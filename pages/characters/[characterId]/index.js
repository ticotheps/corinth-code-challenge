import { useRouter } from 'next/router';
import { getCharacterById } from '../../../dummy-data';
import styles from '../../../styles/CharacterDetailsPage.module.css';

export default function CharacterDetailsPage() {
	const router = useRouter();
	const characterId = parseInt(router.query.characterId);
	const character = getCharacterById(characterId);

	if (!character) {
		return (
			<h3 className={styles.description}>
				No character with that ID was found. Please go back and try again.
			</h3>
		);
	}

	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<h1 className={styles.title}>{character.name}</h1>
				<div className={styles.containerRow}>
					<img src={`../../../${character.image}`} />
					<ul>
						<li>
							<b>Height:</b> {character.height} cm
						</li>
						<li>
							<b>Mass:</b> {character.mass} kg
						</li>
						<li>
							<b>Hair Color:</b> {character.hair_color}
						</li>
						<li>
							<b>Skin Color:</b> {character.skin_color}
						</li>
						<li>
							<b>Eye Color:</b> {character.eye_color}
						</li>
						<li>
							<b>Birth Year:</b> {character.birth_year}
						</li>
					</ul>
				</div>
			</div>
		</main>
	);
}
