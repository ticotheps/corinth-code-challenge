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
	const { character } = props;
	const characterId = character.url.split('/').slice(-2)[0];

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
						<Button type='button' color='gradient' rounded auto>
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
