import { useState } from 'react';
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
	const { swapiPeopleData, akababPeopleData, nextPageSwapiData } = props;

	const [swapiPeople, setSwapiPeople] = useState(swapiPeopleData);
	const [akababPeople, setAkababPeople] = useState(akababPeopleData);
	const [nextPageSwapi, setNextPageSwapi] = useState(nextPageSwapiData);

	async function handleClick(e) {
		e.preventDefault();
		let nextRes = await fetch(nextPageSwapi);
		let nextData = await nextRes.json();
		setSwapiPeople(swapiPeople.concat(nextData.results));
		setNextPageSwapi(nextData.next);
	}

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
					{nextPageSwapi && (
						<Grid justify='center' align='center'>
							<Spacer y={3} />
							<Button
								type='submit'
								color='gradient'
								size='xl'
								auto
								rounded
								onClick={(e) => handleClick(e)}
							>
								Load More
							</Button>
						</Grid>
					)}
				</Container>
				<Grid justify='center' align='center'>
					<Spacer y={2} />
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
	return data;
}

export async function getStaticProps() {
	const swapi_people_data = await getData('https://swapi.dev/api/people/');
	const akabab_people_data = await getData(
		'https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json'
	);

	if (!swapi_people_data) {
		console.error('Error fetching "swapi_people_data"');
		return {
			notFound: true,
		};
	}

	if (!akabab_people_data) {
		console.error('Error fetching "akabab_people_data"');
		return {
			notFound: true,
		};
	}

	return {
		props: {
			swapiPeopleData: swapi_people_data.results,
			akababPeopleData: akabab_people_data,
			nextPageSwapiData: swapi_people_data.next,
		},
	};
}
