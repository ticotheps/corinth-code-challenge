import { useState } from 'react';
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

function useLocalStorage(key, initialValue) {
	// state to store our value
	// pass initial state function useState() so logic is only executed once
	const [storedValue, setStoredValue] = useState(() => {
		if (typeof window === 'undefined') {
			return initialValue;
		}

		try {
			// retrieves item from local storage by key
			const item = window.localStorage.getItem(key);
			// parses stored JSON or returns initial value if null
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.log({ error });
			return initialValue;
		}
	});

	const setValue = (value) => {
		try {
			// allows value to be a function so we have same API as useState()
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;
			// saves state
			setStoredValue(valueToStore);
			// saves to local storage
			if (typeof window !== 'undefined') {
				window.localStorage.setItem(key, JSON.stringify(valueToStore));
			}
		} catch (error) {
			console.log({ error });
		}
	};
	return [storedValue, setValue];
}

export default function CharacterItem(props) {
	const { character } = props;
	const characterUrl = character.url;
	// finds a character's id in it's "url" property
	const characterId = characterUrl.match(/([\d]+)/g)[0];

	// saves character's properties into local storage
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
						<Link href={`/characters/${characterId}`}>
							<Button
								color='gradient'
								rounded
								auto
								onClick={(e) => {
									setCharId(characterId);
									setCharName(character.name);
									setCharHeight(character.height);
									setCharMass(character.mass);
									setCharHairColor(character.hair_color);
									setCharSkinColor(character.skin_color);
									setCharEyeColor(character.eye_color);
									setCharBirthYear(character.birth_year);
								}}
							>
								<Text
									css={{ color: 'white' }}
									size={12}
									weight='bold'
									transform='uppercase'
								>
									Learn More
								</Text>
							</Button>
						</Link>
					</Row>
					<Spacer y={1} />
				</Col>
			</Card>
		</Grid>
	);

	return <div>{characterCard()}</div>;
}
