import { Grid, Col, Link, Card, Row, Text } from '@nextui-org/react';

export default function SearchResults(props) {
	const { data } = props;

	const results = data.map((character, index) => {
		const characterUrl = character.url;
		const characterId = characterUrl.split('/').slice(-2)[0];

		return (
			<Grid key={index}>
				<Col justify='center'>
					<Link href={`/characters/${characterId}`}>
						<Card hoverable clickable bordered css={{ minWidth: '180px' }}>
							<Row justify='center' align='center'>
								<Text
									size='1.1rem'
									css={{
										textGradient: '45deg, blue -10%, purple 80%',
									}}
								>
									{character.name}
								</Text>
							</Row>
						</Card>
					</Link>
				</Col>
			</Grid>
		);
	});

	return results;
}
