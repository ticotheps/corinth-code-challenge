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
						size='3.5em'
						css={{
							textGradient: '45deg, $blue500 -20%, $pink500 50%',
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
						Search by Character Name
					</Button>
				</Link>
			</Row>
		</Container>
	);
}

export async function getStaticProps() {
	const file_path = path.join(process.cwd(), 'data', 'mock_data.json');
	const json_data = await fs.readFile(file_path);
	const mock_data = JSON.parse(json_data);

	return {
		props: {
			people: mock_data.people,
		},
	};
}
