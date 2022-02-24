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
	const { swapiPeople, akababPeople, nextPageSwapiPeople } = props;
	// console.log({ swapiPeople });

	return (
		<Container fluid>
			<Spacer y={3} />
			<Grid.Container justify='center' align='center'>
				<Grid justify='center' wrap='wrap'>
					<Text
						h1
						size='3em'
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
					<Grid.Container gap={3} justify='center' wrap='wrap'>
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

async function getData(url) {
	const res = await fetch(url);
	const data = await res.json();
	const nextPageOfData = data.next;

	return data;
}

export async function getStaticProps() {
	const swapi_people_data = await getData('https://swapi.dev/api/people/');
	const akabab_people_data = await getData(
		'https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json'
	);
	console.log({ akabab_people_data });

	return {
		props: {
			swapiPeople: swapi_people_data.results,
			akababPeople: akabab_people_data,
			nextPageSwapiPeople: swapi_people_data.next,
		},
	};
}
