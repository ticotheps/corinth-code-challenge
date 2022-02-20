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
	const { character } = props;

	if (!character) {
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
						{character.name}
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
									{character.height} cm
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
									{character.mass} kg
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
									{character.hair_color}
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
									{character.skin_color}
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
									{character.eye_color}
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
									{character.birth_year}
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
									{character.species}
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
									{character.films}
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
									{character.starships}
								</Text>
							</Col>
						</Row> */}
					</Grid.Container>
				</Grid.Container>
			</Col>
		</Container>
	);
}

async function getData() {
	const file_path = path.join(process.cwd(), 'data', 'swapi_people_data.json');
	const json_data = await fs.readFile(file_path);
	const swapi_people_data = JSON.parse(json_data);

	return swapi_people_data;
}

export async function getStaticProps(context) {
	const { params } = context;
	const characterId = params.characterId;

	const swapi_people_data = await getData();

	const matchedCharacter = swapi_people_data.people.find((character) => {
		const storedCharId = character.url.split('/').slice(-2)[0];
		return storedCharId === characterId;
	});

	return {
		props: {
			character: matchedCharacter,
		},
	};
}

export async function getStaticPaths() {
	const swapi_people_data = await getData();

	const characterIdsArr = swapi_people_data.people.map((character) => {
		return character.url.split('/').slice(-2)[0];
	});

	const pathsWithParams = characterIdsArr.map((id) => ({
		params: { characterId: id },
	}));

	return {
		// characterId 17 does NOT exist in the SWAPI.dev API and does not exist here
		paths: pathsWithParams,
		fallback: false,
	};
}
