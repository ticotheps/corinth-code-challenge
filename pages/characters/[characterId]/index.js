import { useRouter } from 'next/router';
import styles from '../../../styles/CharacterDetailsPage.module.css';

export default function CharacterDetailsPage() {
	const router = useRouter();

	console.log(router.query);
	console.log(router.pathname);

	return (
		<main className={styles.main}>
			<h1 className={styles.title}>Character Details Page</h1>
		</main>
	);
}
