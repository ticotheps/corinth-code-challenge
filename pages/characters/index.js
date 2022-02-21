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
	// console.log({ swapiPeople, akababPeople });

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
				{swapiPeople.map((swapiCharacter, index) => {
					const swapiCharacterId = swapiCharacter.url.split('/').slice(-2)[0];
					{
						/* const matchingAkababCharacterArr = akababPeople.filter(
						(akababCharacter) => {
							return akababCharacter.name === swapiCharacter.name;
						}
					); */
					}
					{
						/* console.log({ swapiCharacter, matchingAkababCharacterArr }); */
					}

					return (
						<CharacterItem
							swapiCharacter={swapiCharacter}
							akababPeople={akababPeople}
							key={index}
						/>
					);
				})}
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
