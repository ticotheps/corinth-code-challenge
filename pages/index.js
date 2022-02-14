import {
	Container,
	Row,
	Col,
	Card,
	Text,
	Button,
	Spacer,
	Link,
} from '@nextui-org/react';

export default function HomePage() {
	const charactersButton = () => (
		<Button color='gradient' size='xl' ghost rounded>
			See Characters
		</Button>
	);

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
						Welcome to Star Wars Meet & Greet!
					</Text>
				</Row>
				<Spacer y={4} />
				<Row justify='center' align='center'>
					<Card css={{ mw: '500px' }}>
						<Card.Body>
							<Card.Image
								src='../images/hero_image.jpg'
								height={400}
								width='100%'
								alt='Darth Vader coffee meme'
							/>
						</Card.Body>
					</Card>
				</Row>
				<Spacer y={2} />
				<Row justify='center' align='center'>
					<Text
						h2
						size='2rem'
						css={{
							textGradient: '45deg, $purple500 -20%, $pink500 100%',
						}}
						weight='bold'
					>
						Your one-stop-shop for learning more about your favorite Star Wars
						characters!
					</Text>
				</Row>
				<Spacer y={3} />
				<Row justify='center' align='center'>
					<Link href='/characters'>{charactersButton()}</Link>
				</Row>
			</Col>
		</Container>
	);
}
