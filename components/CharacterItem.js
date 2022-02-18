import NextLink from 'next/link';
import {
	Grid,
	Card,
	Row,
	Col,
	Text,
	Button,
	Spacer,
	Link,
} from '@nextui-org/react';
// import useLocalStorage from '../utils/hooks/useLocalStorage';

export default function CharacterItem(props) {
	const { character } = props;
	// console.log({ props });
	const characterUrl = character.url;
	const characterId = characterUrl.split('/').slice(-2)[0];
	// console.log({ characterUrl, characterId });

	// saves character's properties into local storage
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

	const characterCard = () => (
		<Grid xs={3}>
			<Card hoverable css={{ minWidth: '250px' }}>
				<Col>
					<Spacer y={1} />
					<Row justify='center' align='center'>
						<Text h3>{character.name}</Text>
					</Row>
					<Spacer y={1} />
					<Row justify='center' align='center'>
						<Button
							type='button'
							color='gradient'
							rounded
							auto
							// onClick={(e) => {
							// 	setCharId(characterId);
							// 	setCharName(character.name);
							// 	setCharHeight(character.height);
							// 	setCharMass(character.mass);
							// 	setCharHairColor(character.hair_color);
							// 	setCharSkinColor(character.skin_color);
							// 	setCharEyeColor(character.eye_color);
							// 	setCharBirthYear(character.birth_year);
							// }}
						>
							<NextLink href={`/characters/${characterId}`} passHref>
								<Link>
									<Text
										css={{ color: 'white' }}
										size={12}
										weight='bold'
										transform='uppercase'
									>
										Learn More
									</Text>
								</Link>
							</NextLink>
						</Button>
					</Row>
					<Spacer y={1} />
				</Col>
			</Card>
		</Grid>
	);

	return <div>{characterCard()}</div>;
}
