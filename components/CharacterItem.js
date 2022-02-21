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

export default function CharacterItem(props) {
	const { swapiCharacter, akababPeople } = props;
	// retrieves SWAPI character's 'id' property from its 'url' property.
	const swapiCharacterId = swapiCharacter.url.split('/').slice(-2)[0];

	const matchingAkababCharacterArr = akababPeople.filter((akababCharacter) => {
		return akababCharacter.name === swapiCharacter.name;
	});

	const characterCard = () => (
		<Grid xs={3}>
			<Card hoverable css={{ minWidth: '250px' }}>
				<Col>
					<Spacer y={1} />
					<Row justify='center' align='center'>
						<Text h3>{swapiCharacter.name}</Text>
					</Row>
					<Spacer y={1} />
					<Grid>
						<Card cover css={{ width: '85%', '@md': { marginLeft: '30%' } }}>
							<Card.Image
								src={
									matchingAkababCharacterArr.length > 0
										? matchingAkababCharacterArr[0].image
										: '../images/yoda_unavailable.jpg'
								}
								height='auto'
								width='100%'
								alt='Meme of Yoda apologizing that this image is unavailble'
							/>
						</Card>
					</Grid>
					<Row justify='center' align='center'>
						<Button type='button' color='gradient' rounded auto>
							<NextLink href={`/characters/${swapiCharacterId}`} passHref>
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
