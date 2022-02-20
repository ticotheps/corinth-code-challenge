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
	console.log({ people, species, starships });

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

	return data;
}

export async function getStaticProps() {
	const swapiPeopleDataFile = 'swapi_people_data.json';
	const swapiSpeciesDataFile = 'swapi_species_data.json';
	const swapiStarshipsDataFile = 'swapi_starships_data.json';

	const swapi_people_data = await getData(swapiPeopleDataFile);
	const swapi_species_data = await getData(swapiSpeciesDataFile);
	const swapi_starships_data = await getData(swapiStarshipsDataFile);

	return {
		props: {
			people: swapi_people_data.people,
			species: swapi_species_data.species,
			starships: swapi_starships_data.starships,
		},
	};
}
