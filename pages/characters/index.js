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
	const { people } = props;

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

async function getData() {
	const file_path = path.join(process.cwd(), 'data', 'people_data.json');
	const json_data = await fs.readFile(file_path);
	const people_data = JSON.parse(json_data);

	return people_data;
}

export async function getStaticProps() {
	const people_data = await getData();

	return {
		props: {
			people: people_data.people,
		},
	};
}
