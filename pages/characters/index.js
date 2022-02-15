import {
	Card,
	Container,
	Grid,
	Col,
	Row,
	Text,
	Spacer,
	Link,
	Button,
} from '@nextui-org/react';
import CharactersList from '../../components/CharactersList';

export default function FeaturedCharactersPage() {
	return (
		<Container fluid>
			<Spacer y={3} />
			<Row justify='center' align='center'>
				<Col align='center'>
					<Text
						h1
						size='3.5em'
						css={{
							textGradient: '45deg, $blue500 -20%, $pink500 50%',
						}}
						weight='bold'
					>
						Featured Characters
					</Text>
				</Col>
			</Row>
			<Spacer y={2} />
			<Grid.Container gap={2} justify='center'>
				<CharactersList />
			</Grid.Container>
			<Spacer y={5} />
			<Row justify='center' align='center'>
				<Link href='/characters/search'>
					<Button color='gradient' size='xl' ghost auto rounded>
						Search All Characters
					</Button>
				</Link>
			</Row>
		</Container>
	);
}
