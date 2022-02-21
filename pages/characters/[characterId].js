import path from 'path';
import fs from 'fs/promises';
import {
	Container,
	Grid,
	Row,
	Col,
	Card,
	Text,
	Spacer,
	Loading,
} from '@nextui-org/react';

export default function CharacterProfilePage(props) {
	const { swapiCharacter } = props;
	// console.log({ swapiCharacter });

	if (!swapiCharacter) {
		return (
			<Container fluid>
				<Col align='center'>
					<Spacer y={10} />
					<Row justify='center' align='center'>
						<Text
							h1
							size='3.5em'
							css={{
								textGradient: '45deg, $blue500 -20%, $pink500 50%',
							}}
							weight='bold'
						>
							Loading
						</Text>
						<Spacer x={1} />
						<Loading type='points' size='xl' />
					</Row>
					<Spacer y={4} />
				</Col>
			</Container>
		);
	}

	return (
		<Container fluid>
			<Col align='center'>
				<Row justify='center' align='center'>
					<Text
						h1
						css={{
							textGradient: '45deg, $blue500 -20%, $pink500 50%',
							'@xs': {
								fontSize: '3.5rem',
							},
						}}
						weight='bold'
					>
						{swapiCharacter.name}
					</Text>
				</Row>
				<Spacer y={1} />
				<Grid.Container gap={2} justify='space-evenly' wrap='wrap'>
					<Grid>
						<Card cover css={{ width: '85%', '@md': { marginLeft: '30%' } }}>
							<Card.Image
								src='../images/yoda_unavailable.jpg'
								height='auto'
								width='100%'
								alt='Meme of Yoda apologizing that this image is unavailble'
							/>
						</Card>
					</Grid>
					<Grid.Container
						xs
						css={{
							width: '100%',
							'@xs': {
								alignContent: 'center',
							},
						}}
					>
						<Row>
							<Col align='right'>
								<Text h4 size='1.75rem' weight='bold'>
									Height:
								</Text>
							</Col>
							<Spacer y={1} x={2} />
							<Col align='left'>
								<Text
									h4
									size='1.75rem'
									css={{
										textGradient: '45deg, $blue500 -20%, $pink500 50%',
									}}
								>
									{swapiCharacter.height} cm
								</Text>
							</Col>
						</Row>
						<Row>
							<Col align='right'>
								<Text h4 size='1.75rem' weight='bold'>
									Mass:
								</Text>
							</Col>
							<Spacer y={1} x={2} />
							<Col align='left'>
								<Text
									h4
									size='1.75rem'
									css={{
										textGradient: '45deg, $blue500 -20%, $pink500 50%',
									}}
								>
									{swapiCharacter.mass} kg
								</Text>
							</Col>
						</Row>
						<Row>
							<Col align='right'>
								<Text h4 size='1.75rem' weight='bold'>
									Hair Color:
								</Text>
							</Col>
							<Spacer y={1} x={2} />
							<Col align='left'>
								<Text
									h4
									size='1.75rem'
									css={{
										textGradient: '45deg, $blue500 -20%, $pink500 50%',
									}}
								>
									{swapiCharacter.hair_color}
								</Text>
							</Col>
						</Row>
						<Row>
							<Col align='right'>
								<Text h4 size='1.75rem' weight='bold'>
									Skin Color:
								</Text>
							</Col>
							<Spacer y={1} x={2} />
							<Col align='left'>
								<Text
									h4
									size='1.75rem'
									css={{
										textGradient: '45deg, $blue500 -20%, $pink500 50%',
									}}
								>
									{swapiCharacter.skin_color}
								</Text>
							</Col>
						</Row>
						<Row>
							<Col align='right'>
								<Text h4 size='1.75rem' weight='bold'>
									Eye Color:
								</Text>
							</Col>
							<Spacer y={1} x={2} />
							<Col align='left'>
								<Text
									h4
									size='1.75rem'
									css={{
										textGradient: '45deg, $blue500 -20%, $pink500 50%',
									}}
								>
									{swapiCharacter.eye_color}
								</Text>
							</Col>
						</Row>
						<Row>
							<Col align='right'>
								<Text h4 size='1.75rem' weight='bold'>
									Birth Year:
								</Text>
							</Col>
							<Spacer y={1} x={2} />
							<Col align='left'>
								<Text
									h4
									size='1.75rem'
									css={{
										textGradient: '45deg, $blue500 -20%, $pink500 50%',
									}}
								>
									{swapiCharacter.birth_year}
								</Text>
							</Col>
						</Row>
						{/* <Row>
							<Col align='right'>
								<Text h4 size='1.75rem' weight='bold'>
									Species:
								</Text>
							</Col>
							<Spacer y={1} x={2} />
							<Col align='left'>
								<Text
									h4
									size='1.75rem'
									css={{
										textGradient: '45deg, $blue500 -20%, $pink500 50%',
									}}
								>
									{swapiCharacter.species}
								</Text>
							</Col>
						</Row>
						<Row>
							<Col align='right'>
								<Text h4 size='1.75rem' weight='bold'>
									Films:
								</Text>
							</Col>
							<Spacer y={1} x={2} />
							<Col align='left'>
								<Text
									h4
									size='1.75rem'
									css={{
										textGradient: '45deg, $blue500 -20%, $pink500 50%',
									}}
								>
									{swapiCharacter.films}
								</Text>
							</Col>
						</Row>
						<Row>
							<Col align='right'>
								<Text h4 size='1.75rem' weight='bold'>
									Starships:
								</Text>
							</Col>
							<Spacer y={1} x={2} />
							<Col align='left'>
								<Text
									h4
									size='1.75rem'
									css={{
										textGradient: '45deg, $blue500 -20%, $pink500 50%',
									}}
								>
									{swapiCharacter.starships}
								</Text>
							</Col>
						</Row> */}
					</Grid.Container>
				</Grid.Container>
			</Col>
		</Container>
	);
}

async function getData(dataFile) {
	const file_path = path.join(process.cwd(), 'data', dataFile);
	const json_data = await fs.readFile(file_path);
	const data = JSON.parse(json_data);

	return data;
}

export async function getStaticProps(context) {
	const swapiPeopleDataFile = 'swapi_people_data.json';
	const swapiSpeciesDataFile = 'swapi_species_data.json';
	const swapiStarshipsDataFile = 'swapi_starships_data.json';
	const akababPeopleDataFile = 'akabab_people_data.json';

	const swapi_people_data = await getData(swapiPeopleDataFile);
	const swapi_species_data = await getData(swapiSpeciesDataFile);
	const swapi_starships_data = await getData(swapiStarshipsDataFile);
	const akabab_people_data = await getData(akababPeopleDataFile);

	// returns a single character object from the 'swapi_people_data' array that
	// has the same character id as the character rendered on the current profile page.
	const swapiCharacter = swapi_people_data.people.find((character) => {
		const { params } = context;
		const characterId = params.characterId;
		const storedCharId = character.url.split('/').slice(-2)[0];
		return storedCharId === characterId;
	});

	// renders 404 page if a character with the desired id is not found.
	if (!swapiCharacter) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			swapiCharacter: swapiCharacter,
		},
	};
}

export async function getStaticPaths() {
	const swapiPeopleDataFile = 'swapi_people_data.json';
	const swapi_people_data = await getData(swapiPeopleDataFile);

	// returns an array of characters' 'id' property that has been retrieved
	// from their 'url' property.
	const characterIdsArr = swapi_people_data.people.map((character) => {
		return character.url.split('/').slice(-2)[0];
	});

	// creates an array of objects needed for the 'paths' property.
	const pathsWithParams = characterIdsArr.map((id) => ({
		params: { characterId: id },
	}));

	return {
		paths: pathsWithParams,
		fallback: true,
	};
}
