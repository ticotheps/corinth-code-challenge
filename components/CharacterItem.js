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
import CharacterProfile from '../components/CharacterProfile';

export default function CharacterItem(props) {
	const { character } = props;
	const propsCharacterId = parseInt(props.characterId);

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
						<Button color='gradient' rounded auto>
							<Link href={`/characters/${propsCharacterId}`}>
								<Text
									css={{ color: 'white' }}
									size={12}
									weight='bold'
									transform='uppercase'
								>
									Learn More
								</Text>
							</Link>
							<div style={{ display: 'none' }}>
								<CharacterProfile characterName={character.name} />
							</div>
						</Button>
					</Row>
					<Spacer y={1} />
				</Col>
			</Card>
		</Grid>
	);

	return <div>{characterCard()}</div>;
}
