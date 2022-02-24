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
	const { swapiCharacterData, akababCharacterData } = props;
	const swapiCharacter = swapiCharacterData;
	const akababCharacter = akababCharacterData;

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
							'@md': {
								fontSize: '4.5rem',
							},
						}}
						weight='bold'
					>
						{swapiCharacter.name}
					</Text>
				</Row>
				<Spacer y={1} />
				<Grid.Container gap={2} justify='space-evenly' wrap='wrap'>
					<Grid xs={12} sm={4} md={5}>
						<Card cover>
							<Card.Image
								src={akababCharacter.image || '../images/yoda_unavailable.jpg'}
								height='auto'
								width='100%'
								alt={
									akababCharacter.name ||
									'Meme of Yoda apologizing that this image is unavailble'
								}
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
								<Text
									h4
									size='1.75rem'
									weight='bold'
									css={{ fontSize: '2.25rem' }}
								>
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
										fontSize: '2.25rem',
									}}
								>
									{swapiCharacter.height} cm
								</Text>
							</Col>
						</Row>
						<Row>
							<Col align='right'>
								<Text
									h4
									size='1.75rem'
									weight='bold'
									css={{ fontSize: '2.25rem' }}
								>
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
										fontSize: '2.25rem',
									}}
								>
									{swapiCharacter.mass} kg
								</Text>
							</Col>
						</Row>
						<Row>
							<Col align='right'>
								<Text
									h4
									size='1.75rem'
									weight='bold'
									css={{ fontSize: '2.25rem' }}
								>
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
										fontSize: '2.25rem',
									}}
								>
									{swapiCharacter.hair_color}
								</Text>
							</Col>
						</Row>
						<Row>
							<Col align='right'>
								<Text
									h4
									size='1.75rem'
									weight='bold'
									css={{ fontSize: '2.25rem' }}
								>
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
										fontSize: '2.25rem',
									}}
								>
									{swapiCharacter.skin_color}
								</Text>
							</Col>
						</Row>
						<Row>
							<Col align='right'>
								<Text
									h4
									size='1.75rem'
									weight='bold'
									css={{ fontSize: '2.25rem' }}
								>
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
										fontSize: '2.25rem',
									}}
								>
									{swapiCharacter.eye_color}
								</Text>
							</Col>
						</Row>
						<Row>
							<Col align='right'>
								<Text
									h4
									size='1.75rem'
									weight='bold'
									css={{ fontSize: '2.25rem' }}
								>
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
										fontSize: '2.25rem',
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

async function getData(url) {
	const res = await fetch(url);
	const data = await res.json();
	return data;
}

export async function getServerSideProps(context) {
	const { params, res } = context;

	const characterId = params.characterId;

	const swapi_character_data = await getData(
		`https://swapi.dev/api/people/${characterId}`
	);
	const akabab_character_data = await getData(
		`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${characterId}.json`
	);

	if (!swapi_character_data) {
		console.error('Error fetching "swapi_character_data"');
		return {
			notFound: true,
		};
	}

	if (!akabab_character_data) {
		console.error('Error fetching "akabab_character_data"');
		return {
			notFound: true,
		};
	}

	return {
		props: {
			swapiCharacterData: swapi_character_data,
			akababCharacterData: akabab_character_data,
		},
	};
}
