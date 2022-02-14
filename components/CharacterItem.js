import Link from 'next/link';
import { Grid, Card, Row, Col, Text, Button, Spacer } from '@nextui-org/react';

export default function CharacterItem(props) {
	const { image, name, url } = props.character;
	let numberPattern = /\d+/g;
	const matchedNumber = url.match(numberPattern);
	// console.log({ matchedNumber });
	const character_id = parseInt(matchedNumber[0]);
	console.log({ character_id });
	const characterDetailsPageLink = `/characters/${character_id}`;

	const characterCard = () => (
		<Grid xs={4}>
			<Card hoverable css={{ minWidth: '300px' }}>
				{/* <Card.Body>
					<Card.Image
						objectFit='cover'
						src={image}
						width='100%'
						height={350}
						alt={name}
					/>
				</Card.Body> */}
				<Col>
					<Spacer y={1} />
					<Row justify='center' align='center'>
						<Text h3>{name}</Text>
					</Row>
					<Spacer y={1} />
					<Row justify='center' align='center'>
						<Button color='gradient' rounded auto ghost>
							<Link href={characterDetailsPageLink}>
								<Text
									css={{ color: 'inherit' }}
									size={12}
									weight='bold'
									transform='uppercase'
								>
									Learn More
								</Text>
							</Link>
						</Button>
					</Row>
					<Spacer y={1} />
				</Col>
			</Card>
		</Grid>
	);

	return <div>{characterCard()}</div>;
}
