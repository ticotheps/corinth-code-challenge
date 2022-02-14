import Link from 'next/link';
import { Card, Row, Col, Text, Button, Spacer } from '@nextui-org/react';

export default function CharacterItem(props) {
	const { id, image, name } = props.character;
	const characterDetailsPageLink = `/characters/${id}`;
	const characterCard = () => (
		<Card hoverable>
			<Card.Body css={{ p: 0 }}>
				<Card.Image
					objectFit='cover'
					src={image}
					width='100%'
					height={350}
					alt={name}
				/>
			</Card.Body>
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
	);

	return <div>{characterCard()}</div>;
}
