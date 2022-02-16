import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
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

function useLocalStorage(key, initialValue) {
	// passes initial state to useState() so logic is only executed once
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
