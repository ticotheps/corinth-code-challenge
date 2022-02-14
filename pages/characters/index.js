import { getAllCharacters } from '../../dummy-data.js';
import { Container, Grid, Row, Text, Spacer } from '@nextui-org/react';
import CharactersList from '../../components/CharactersList';

export default function CharactersPage() {
	const characters = getAllCharacters();

	return (
		<Container fluid>
			<Grid.Container gap={2} justify='center'>
				<Spacer y={3} />
				<Row justify='center' align='center'>
					<Text
						h1
						size='4em'
						css={{
							textGradient: '45deg, $blue500 -20%, $pink500 50%',
						}}
						weight='bold'
					>
						Star Wars Characters
					</Text>
				</Row>
				<Spacer y={4} />
				<CharactersList characters={characters} />
			</Grid.Container>
		</Container>
	);
}
