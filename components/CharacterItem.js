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
		<Grid>
			<Card bordered hoverable>
				<Spacer y={1} />
				<Grid.Container gap={2} justify='space-evenly' wrap='wrap'>
					<Text h3>{swapiCharacter.name}</Text>
				</Grid.Container>
				<Spacer y={1} />
				<Grid justify='center' align='center'>
					<Card cover css={{ position: 'relative' }}>
						<Card.Image
							src={
								matchingAkababCharacterArr.length > 0
									? matchingAkababCharacterArr[0].image
									: '../images/yoda_unavailable.jpg'
							}
							height={200}
							width={150}
							alt={
								matchingAkababCharacterArr.length > 0
									? matchingAkababCharacterArr[0].name
									: 'Meme of Yoda apologizing that this image is unavailble'
							}
							css={{
								objectPosition: 'center top',
							}}
						/>
					</Card>
				</Grid>
				<Spacer y={1} />
				<Grid justify='center' align='center'>
					<Button type='button' color='gradient' size='lg' rounded auto>
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
				</Grid>
				<Spacer y={1} />
			</Card>
			<Spacer y={1} />
		</Grid>
	);

	return <div>{characterCard()}</div>;
}
