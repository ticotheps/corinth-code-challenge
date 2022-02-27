import {
	Container,
	Grid,
	Row,
	Col,
	Card,
	Text,
	Button,
	Spacer,
	Link,
} from '@nextui-org/react';

export default function HomePage() {
	return (
		<Container fluid>
			<Spacer y={1} />
			<Grid.Container align='center' justify='center'>
				<Grid
					justify='center'
					align='center'
					css={{
						'@xs': {
							marginTop: '1.25rem',
							marginRight: '1rem',
						},
						'@md': {
							marginTop: '1.5rem',
						},
					}}
				>
					<Text
						h1
						size='4.5em'
						css={{
							textGradient: '45deg, $blue500 -20%, $pink500 50%',
							'@xs': {
								fontSize: '5rem',
							},
							'@md': {
								fontSize: '4.5rem',
							},
						}}
						weight='bold'
					>
						Find &lsquo;em.
					</Text>
					<Text
						h1
						size='4.5em'
						css={{
							textGradient: '45deg, $blue500 -20%, $pink500 50%',
							'@xs': {
								fontSize: '5rem',
							},
							'@md': {
								fontSize: '4.5rem',
							},
						}}
						weight='bold'
					>
						Meet &lsquo;em.
					</Text>
					<Text
						h1
						size='4.5em'
						css={{
							textGradient: '45deg, $blue500 -20%, $pink500 50%',
							'@xs': {
								fontSize: '5rem',
							},
							'@md': {
								fontSize: '4.5rem',
							},
						}}
						weight='bold'
					>
						Greet &lsquo;em!
					</Text>
				</Grid>
				<Grid
					justify='center'
					align='center'
					css={{
						'@xs': {
							marginLeft: '1rem',
						},
					}}
				>
					<Spacer y={2} />
					<Card
						css={{
							mw: '400px',
							'@md': {
								marginLeft: '4rem',
							},
						}}
					>
						<Card.Body>
							<Card.Image
								src='../images/hero_image.jpg'
								height={400}
								width='100%'
								alt='Darth Vader coffee meme'
							/>
						</Card.Body>
					</Card>
				</Grid>
				<Spacer y={2} />
				<Grid justify='center' align='center'>
					<Spacer y={1} />
					<Text
						h2
						size='2rem'
						css={{
							textGradient: '45deg, $purple500 -20%, $pink500 100%',
							'@xs': {
								marginTop: '2rem',
							},
							'@md': {
								width: '75%',
								marginTop: '2rem',
							},
						}}
						weight='bold'
					>
						Your one-stop-shop for getting the &quot;<i>deets</i>&quot;
						(details) on your favorite Star Wars characters!
					</Text>
					<Spacer y={2} />
				</Grid>
				<Row justify='center' align='center' wrap='wrap'>
					<Grid>
						<Link href='/characters'>
							<Button
								color='gradient'
								size='xl'
								ghost
								rounded
								css={{
									'@xs': {
										marginRight: '1rem',
									},
									'@md': {
										marginRight: '2rem',
									},
								}}
							>
								Browse All Characters
							</Button>
						</Link>
						<Spacer x={1} />
					</Grid>

					<Grid>
						<Link href='/characters/search'>
							<Button color='gradient' size='xl' ghost rounded>
								Search Character Name
							</Button>
						</Link>
						<Spacer x={1} />
					</Grid>
				</Row>
			</Grid.Container>
		</Container>
	);
}
