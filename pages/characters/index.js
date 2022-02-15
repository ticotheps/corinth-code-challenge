import { Container, Grid, Row, Text, Spacer, Button } from '@nextui-org/react';
import CharactersList from '../../components/CharactersList';

export default function CharactersPage() {
	return (
		<Container fluid>
			<Spacer y={3} />
			<Row justify='center' align='center'>
				<Text
					h1
					size='4em'
					css={{
						textGradient: '45deg, $blue500 -20%, $pink500 50%',
					}}
					weight='bold'
				>
					Star Wars Characters
				</Text>
			</Row>
			<Spacer y={4} />
			<Grid.Container gap={2} justify='center'>
				<CharactersList />
			</Grid.Container>
			<Grid.Container gap={2} justify='center'>
				<Grid>
					<Button disabled color='gradient' auto>
						See More
					</Button>
				</Grid>
			</Grid.Container>
		</Container>
	);
}
