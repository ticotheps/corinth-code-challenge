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
					</Grid.Container>
				</Grid.Container>
			</Col>
		</Container>
	);
}

export async function getStaticProps(context) {
	const { params } = context;
	const characterId = params.characterId;

	const file_path = path.join(process.cwd(), 'data', 'mock_data.json');
	const json_data = await fs.readFile(file_path);
	const mock_data = JSON.parse(json_data);

	const matchedCharacter = mock_data.people.find((character) => {
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
	return {
		paths: [
			{ params: { characterId: '1' } },
			{ params: { characterId: '2' } },
			{ params: { characterId: '3' } },
			{ params: { characterId: '4' } },
			{ params: { characterId: '5' } },
			{ params: { characterId: '6' } },
			{ params: { characterId: '7' } },
			{ params: { characterId: '8' } },
			{ params: { characterId: '9' } },
			{ params: { characterId: '10' } },
			{ params: { characterId: '11' } },
			{ params: { characterId: '12' } },
			{ params: { characterId: '13' } },
			{ params: { characterId: '14' } },
			{ params: { characterId: '15' } },
			{ params: { characterId: '16' } },
			// no need to pre-render for characterId '17' b/c it doesn't exist
			// on API.
			{ params: { characterId: '18' } },
			{ params: { characterId: '19' } },
			{ params: { characterId: '20' } },
			{ params: { characterId: '21' } },
			{ params: { characterId: '22' } },
			{ params: { characterId: '23' } },
			{ params: { characterId: '24' } },
			{ params: { characterId: '25' } },
			{ params: { characterId: '26' } },
			{ params: { characterId: '27' } },
			{ params: { characterId: '28' } },
			{ params: { characterId: '29' } },
			{ params: { characterId: '30' } },
			{ params: { characterId: '31' } },
			{ params: { characterId: '32' } },
			{ params: { characterId: '33' } },
			{ params: { characterId: '34' } },
			{ params: { characterId: '35' } },
			{ params: { characterId: '36' } },
			{ params: { characterId: '37' } },
			{ params: { characterId: '38' } },
			{ params: { characterId: '39' } },
			{ params: { characterId: '40' } },
			{ params: { characterId: '41' } },
			{ params: { characterId: '42' } },
			{ params: { characterId: '43' } },
			{ params: { characterId: '44' } },
			{ params: { characterId: '45' } },
			{ params: { characterId: '46' } },
			{ params: { characterId: '47' } },
			{ params: { characterId: '48' } },
			{ params: { characterId: '49' } },
			{ params: { characterId: '50' } },
			{ params: { characterId: '51' } },
			{ params: { characterId: '52' } },
			{ params: { characterId: '53' } },
			{ params: { characterId: '54' } },
			{ params: { characterId: '55' } },
			{ params: { characterId: '56' } },
			{ params: { characterId: '57' } },
			{ params: { characterId: '58' } },
			{ params: { characterId: '59' } },
			{ params: { characterId: '60' } },
			{ params: { characterId: '61' } },
			{ params: { characterId: '62' } },
			{ params: { characterId: '63' } },
			{ params: { characterId: '64' } },
			{ params: { characterId: '65' } },
			{ params: { characterId: '66' } },
			{ params: { characterId: '67' } },
			{ params: { characterId: '68' } },
			{ params: { characterId: '69' } },
			{ params: { characterId: '70' } },
			{ params: { characterId: '71' } },
			{ params: { characterId: '72' } },
			{ params: { characterId: '73' } },
			{ params: { characterId: '74' } },
			{ params: { characterId: '75' } },
			{ params: { characterId: '76' } },
			{ params: { characterId: '77' } },
			{ params: { characterId: '78' } },
			{ params: { characterId: '79' } },
			{ params: { characterId: '80' } },
			{ params: { characterId: '81' } },
			{ params: { characterId: '82' } },
			{ params: { characterId: '83' } },
		],
		fallback: true,
	};
}
