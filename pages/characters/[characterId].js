// import path from 'path';
// import fs from 'fs/promises';

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
	const [charId, setCharId] = useLocalStorage('charId', '');
	const [charName, setCharName] = useLocalStorage('charName', '');
	const [charHeight, setCharHeight] = useLocalStorage('charHeight', '');
	const [charMass, setCharMass] = useLocalStorage('charMass', '');
	const [charHairColor, setCharHairColor] = useLocalStorage(
		'charHairColor',
		''
	);
	const [charSkinColor, setCharSkinColor] = useLocalStorage(
		'charSkinColor',
		''
	);
	const [charEyeColor, setCharEyeColor] = useLocalStorage('charEyeColor', '');
	const [charBirthYear, setCharBirthYear] = useLocalStorage(
		'charBirthYear',
		''
	);

	const router = useRouter();
	const characterId = router.query.characterId;
	// console.log({ characterId });

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
						{charName}
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
									{charHeight} cm
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
									{charMass} kg
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
									{charHairColor}
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
									{charSkinColor}
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
									{charEyeColor}
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
									{charBirthYear}
								</Text>
							</Col>
						</Row>
					</Grid.Container>
				</Row>
			</Col>
		</Container>
	);
}

// export async function getStaticProps(context) {
// 	const { params } = context;
// 	const characterId = params.characterId;
// 	console.log({ characterId });

// 	const file_path = path.join(process.cwd(), 'data', 'mock_data.json');
// 	const json_data = await fs.readFile(file_path);
// 	const mock_data = JSON.parse(json_data);

// 	const character = mock_data.people.find(
// 		(character) => character.id === characterId
// 	);

// 	return {
// 		props: {
// 			loadedCharacter: character,
// 		},
// 	};
// }

// export async function getStaticPaths() {
// 	return {
// 		paths: [
// 			{ params: { characterId: '1' } },
// 			{ params: { characterId: '2' } },
// 			{ params: { characterId: '3' } },
// 		],
// 		fallback: false,
// 	};
// }
