import path from 'path';
import fs from 'fs/promises';

import {
	Container,
	Grid,
	Col,
	Row,
	Text,
	Spacer,
	Link,
	Button,
} from '@nextui-org/react';
import CharacterItem from '../../components/CharacterItem';

export default function CharactersPage(props) {
	const { people, species, starships } = props;

	return (
		<Container fluid>
			<Spacer y={3} />
			<Row justify='center' align='center'>
				<Col align='center'>
					<Text
						h1
						size='2.1em'
						css={{
							textGradient: '45deg, $blue500 -20%, $pink500 50%',
							'@xs': {
								fontSize: '3.5rem',
							},
						}}
						weight='bold'
					>
						Browse All Characters
					</Text>
				</Col>
			</Row>
			<Spacer y={2} />
			<Grid.Container gap={2} justify='center'>
				{people.map((character, index) => (
					<CharacterItem character={character} key={index} />
				))}
			</Grid.Container>
			<Spacer y={5} />
			<Row justify='center' align='center'>
				<Link href='/characters/search'>
					<Button color='gradient' size='xl' ghost auto rounded>
						Search Character Name
					</Button>
				</Link>
			</Row>
		</Container>
	);
}

async function getData(dataFilePath) {
	const file_path = path.join(process.cwd(), 'data', dataFilePath);
	const json_data = await fs.readFile(file_path);
	const data = JSON.parse(json_data);

	console.log({ data });
	return data;
}

export async function getStaticProps() {
	const peopleDataFile = 'people_data.json';
	const speciesDataFile = 'species_data.json';
	const starshipsDataFile = 'starships_data.json';

	const people_data = await getData(peopleDataFile);
	const species_data = await getData(speciesDataFile);
	const starships_data = await getData(starshipsDataFile);

	return {
		props: {
			people: people_data.people,
			species: species_data.species,
			starships: starships_data.starships,
		},
	};
}
