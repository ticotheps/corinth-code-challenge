import { useRouter } from 'next/router';
import {
	Container,
	Row,
	Col,
	Card,
	Text,
	Button,
	Spacer,
} from '@nextui-org/react';
import { getCharacterById } from '../../../dummy-data';

export default function CharacterDetailsPage() {
	const router = useRouter();
	const characterId = parseInt(router.query.characterId);
	const character = getCharacterById(characterId);

	if (!character) {
		return (
			<Text h1>
				No character with that ID was found. Please go back and try again.
			</Text>
		);
	}

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
						{character.name}
					</Text>
				</Row>
				<Spacer y={5} />
				<Row justify='center' align='center'>
					<Col>
						<Card css={{ mw: '500px' }}>
							<Card.Body>
								<Card.Image
									src={`../../../${character.image}`}
									height={400}
									width='100%'
									alt={character.name}
								/>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Row>
							<Col>
								<Text h4 size='2rem' weight='bold'>
									Height:
								</Text>
							</Col>
							<Col>
								<Text
									h4
									size='2rem'
									css={{
										textGradient: '45deg, $blue500 -20%, $pink500 50%',
									}}
								>
									{character.height} cm
								</Text>
							</Col>
						</Row>
						<Row>
							<Col>
								<Text h4 size='2rem' weight='bold'>
									Mass:
								</Text>
							</Col>
							<Col>
								<Text
									h4
									size='2rem'
									css={{
										textGradient: '45deg, $blue500 -20%, $pink500 50%',
									}}
								>
									{character.mass} kg
								</Text>
							</Col>
						</Row>
						<Row>
							<Col>
								<Text h4 size='2rem' weight='bold'>
									Hair Color:
								</Text>
							</Col>
							<Col>
								<Text
									h4
									size='2rem'
									css={{
										textGradient: '45deg, $blue500 -20%, $pink500 50%',
									}}
								>
									{character.hair_color}
								</Text>
							</Col>
						</Row>
						<Row>
							<Col>
								<Text h4 size='2rem' weight='bold'>
									Skin Color:
								</Text>
							</Col>
							<Col>
								<Text
									h4
									size='2rem'
									css={{
										textGradient: '45deg, $blue500 -20%, $pink500 50%',
									}}
								>
									{character.skin_color}
								</Text>
							</Col>
						</Row>
						<Row>
							<Col>
								<Text h4 size='2rem' weight='bold'>
									Eye Color:
								</Text>
							</Col>
							<Col>
								<Text
									h4
									size='2rem'
									css={{
										textGradient: '45deg, $blue500 -20%, $pink500 50%',
									}}
								>
									{character.eye_color}
								</Text>
							</Col>
						</Row>
						<Row>
							<Col>
								<Text h4 size='2rem' weight='bold'>
									Birth Year:
								</Text>
							</Col>
							<Col>
								<Text
									h4
									size='2rem'
									css={{
										textGradient: '45deg, $blue500 -20%, $pink500 50%',
									}}
								>
									{character.birth_year}
								</Text>
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
		</Container>
	);
}
