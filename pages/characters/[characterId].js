import path from 'path';
import fs from 'fs/promises';

import { useRouter } from 'next/router';
import useLocalStorage from '../../utils/hooks/useLocalStorage';
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
	// const [charId, setCharId] = useLocalStorage('charId', '');
	// const [charName, setCharName] = useLocalStorage('charName', '');
	// const [charHeight, setCharHeight] = useLocalStorage('charHeight', '');
	// const [charMass, setCharMass] = useLocalStorage('charMass', '');
	// const [charHairColor, setCharHairColor] = useLocalStorage(
	// 	'charHairColor',
	// 	''
	// );
	// const [charSkinColor, setCharSkinColor] = useLocalStorage(
	// 	'charSkinColor',
	// 	''
	// );
	// const [charEyeColor, setCharEyeColor] = useLocalStorage('charEyeColor', '');
	// const [charBirthYear, setCharBirthYear] = useLocalStorage(
	// 	'charBirthYear',
	// 	''
	// );

	// const router = useRouter();
	// const characterId = router.query.characterId;
	// console.log({ characterId });

	const staticPropsCharacter = props.character;
	console.log({ staticPropsCharacter });

	// console.log('Profile Page - props = ', props);

	return (
		<Container fluid>
			<Col align='center'>
				<Row justify='center' align='center'>
					<Text
						h1
						size='3.5em'
						css={{
							textGradient: '45deg, $blue500 -20%, $pink500 50%',
						}}
						weight='bold'
					>
						{/* {charName} */}
						{staticPropsCharacter.name}
					</Text>
				</Row>
				<Spacer y={1} />
				<Row justify='center' align='center'>
					<Grid.Container gap={2} justify='center' wrap='wrap'>
						<Grid xs={10} sm={8} md={6} lg={4} xl={2}>
							<Card cover>
								<Card.Image
									src='../images/yoda_unavailable.jpg'
									height='auto'
									width='100%'
									alt='Meme of Yoda apologizing that this image is unavailble'
								/>
							</Card>
						</Grid>
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
									{/* {charHeight} cm */}
									{staticPropsCharacter.height} cm
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
									{/* {charMass} kg */}
									{staticPropsCharacter.mass} kg
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
									{/* {charHairColor} */}
									{staticPropsCharacter.hair_color}
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
									{/* {charSkinColor} */}
									{staticPropsCharacter.skin_color}
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
									{/* {charEyeColor} */}
									{staticPropsCharacter.eye_color}
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
									{/* {charBirthYear} */}
									{staticPropsCharacter.birth_year}
								</Text>
							</Col>
						</Row>
					</Grid.Container>
				</Row>
			</Col>
		</Container>
	);
}

export async function getStaticProps(context) {
	const { params } = context;
	const characterId = params.characterId;
	console.log({ characterId });

	const file_path = path.join(process.cwd(), 'data', 'mock_data.json');
	const json_data = await fs.readFile(file_path);
	const mock_data = JSON.parse(json_data);
	console.log({ mock_data });

	const matchedCharacter = mock_data.people.find((character) => {
		const storedCharId = character.url.split('/').slice(-2)[0];
		return storedCharId === characterId;
		// character.url.split('/people/')[1].match(/^d*/) === characterId;
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
			{ params: { characterId: '17' } },
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
		fallback: false,
	};
}
