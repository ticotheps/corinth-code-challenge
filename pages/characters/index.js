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
	const { swapiPeople, akababPeople } = props;

	return (
		<Container fluid>
			<Spacer y={3} />
			<Grid.Container justify='center' align='center'>
				<Grid>
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
					<Spacer y={2} />
				</Grid>
				<Container fluid>
					<Grid.Container gap={2} justify='center' wrap='wrap'>
						{swapiPeople.map((swapiCharacter, index) => (
							<CharacterItem
								swapiCharacter={swapiCharacter}
								akababPeople={akababPeople}
								key={index}
							/>
						))}
					</Grid.Container>
				</Container>
				<Grid justify='center' align='center'>
					<Spacer y={5} />
					<Link href='/characters/search'>
						<Button color='gradient' size='xl' ghost auto rounded>
							Search Character Name
						</Button>
					</Link>
				</Grid>
			</Grid.Container>
		</Container>
	);
}

async function getData(dataFile) {
	const file_path = path.join(process.cwd(), 'data', dataFile);
	const json_data = await fs.readFile(file_path);
	const data = JSON.parse(json_data);

	return data;
}

export async function getStaticProps() {
	const swapiPeopleDataFile = 'swapi_people_data.json';
	const akababPeopleDataFile = 'akabab_people_data.json';

	const swapi_people_data = await getData(swapiPeopleDataFile);
	const akabab_people_data = await getData(akababPeopleDataFile);

	return {
		props: {
			swapiPeople: swapi_people_data.people,
			akababPeople: akabab_people_data.people,
		},
	};
}
