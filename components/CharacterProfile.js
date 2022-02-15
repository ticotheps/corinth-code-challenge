import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
	Container,
	Row,
	Col,
	Card,
	Text,
	Spacer,
	Loading,
} from '@nextui-org/react';

export default function CharacterProfile(props) {
	const router = useRouter();
	const characterId = router.query.characterId;

	console.log({ characterId });

	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		fetch(`https://swapi.dev/api/people/1/`)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			});
	}, []);

	// console.log({ data });

	if (isLoading) return <Loading size='xl' type='points' />;
	if (!data) return <Text h2>Something went wrong. Please try again.</Text>;

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
						{data.name}
					</Text>
				</Row>
				<Spacer y={5} />
				<Row justify='center' align='center'>
					<Col>
						<Card css={{ mw: '500px' }}>
							<Card.Body>
								<Card.Image
									src='../images/yoda_unavailable.jpg'
									height={400}
									width='100%'
									alt='Meme of Yoda apologizing that this image is unavailble'
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
									{data.height} cm
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
									{data.mass} kg
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
									{data.hair_color}
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
									{data.skin_color}
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
									{data.eye_color}
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
									{data.birth_year}
								</Text>
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
		</Container>
	);
}
