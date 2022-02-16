import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
	Container,
	Row,
	Col,
	Card,
	Text,
	Spacer,
	Loading,
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

export default function CharacterProfile(props) {
	const router = useRouter();
	const characterId = router.query.characterId;
	// console.log('props.character = ', props.character);
	// console.log('characterId = ', characterId);
	// console.log('props.name = ', props.name);
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

	// const [data, setData] = useState(null);
	// const [isLoading, setLoading] = useState(false);
	// useEffect(() => {
	// 	setLoading(true);
	// 	fetch(`https://swapi.dev/api/people/${props.characterId}/`)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setData(data);
	// 			setLoading(false);
	// 		});
	// }, []);

	// console.log({ data });

	// if (isLoading) return <Loading size='xl' type='points' />;
	// if (!data) return <Text h2>Something went wrong. Please try again.</Text>;

	return (
		<Container fluid>
			<Col>
				<Row justify='center' align='center'>
					<Text
						h1
						size='5em'
						css={{
							textGradient: '45deg, $blue500 -20%, $pink500 50%',
						}}
						weight='bold'
					>
						{/* {data.name} */}
						{charName}
					</Text>
				</Row>
				<Spacer y={5} />
				<Row justify='center' align='center'>
					<Col>
						<Card css={{ mw: '500px' }}>
							<Card.Body>
								<Card.Image
									src='../images/yoda_unavailable.jpg'
									height={400}
									width='100%'
									alt='Meme of Yoda apologizing that this image is unavailble'
								/>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Row>
							<Col>
								<Text h4 size='2rem' weight='bold'>
									Height:
								</Text>
							</Col>
							<Col>
								<Text
									h4
									size='2rem'
									css={{
										textGradient: '45deg, $blue500 -20%, $pink500 50%',
									}}
								>
									{/* {data.height} cm */}
									{charHeight} cm
								</Text>
							</Col>
						</Row>
						<Row>
							<Col>
								<Text h4 size='2rem' weight='bold'>
									Mass:
								</Text>
							</Col>
							<Col>
								<Text
									h4
									size='2rem'
									css={{
										textGradient: '45deg, $blue500 -20%, $pink500 50%',
									}}
								>
									{/* {data.mass} kg */}
									{charMass} kg
								</Text>
							</Col>
						</Row>
						<Row>
							<Col>
								<Text h4 size='2rem' weight='bold'>
									Hair Color:
								</Text>
							</Col>
							<Col>
								<Text
									h4
									size='2rem'
									css={{
										textGradient: '45deg, $blue500 -20%, $pink500 50%',
									}}
								>
									{/* {data.hair_color} */}
									{charHairColor}
								</Text>
							</Col>
						</Row>
						<Row>
							<Col>
								<Text h4 size='2rem' weight='bold'>
									Skin Color:
								</Text>
							</Col>
							<Col>
								<Text
									h4
									size='2rem'
									css={{
										textGradient: '45deg, $blue500 -20%, $pink500 50%',
									}}
								>
									{/* {data.skin_color} */}
									{charSkinColor}
								</Text>
							</Col>
						</Row>
						<Row>
							<Col>
								<Text h4 size='2rem' weight='bold'>
									Eye Color:
								</Text>
							</Col>
							<Col>
								<Text
									h4
									size='2rem'
									css={{
										textGradient: '45deg, $blue500 -20%, $pink500 50%',
									}}
								>
									{/* {data.eye_color} */}
									{charEyeColor}
								</Text>
							</Col>
						</Row>
						<Row>
							<Col>
								<Text h4 size='2rem' weight='bold'>
									Birth Year:
								</Text>
							</Col>
							<Col>
								<Text
									h4
									size='2rem'
									css={{
										textGradient: '45deg, $blue500 -20%, $pink500 50%',
									}}
								>
									{/* {data.birth_year} */}
									{charBirthYear}
								</Text>
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
		</Container>
	);
}
