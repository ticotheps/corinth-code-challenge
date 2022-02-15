import React, { useState, useEffect } from 'react';
import CharacterItem from './CharacterItem';
import CharacterProfile from './CharacterProfile';
import { Loading, Text, Row, Grid } from '@nextui-org/react';

export default function CharactersList() {
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch('https://swapi.dev/api/people/')
			.then((res) => {
				let responseHeader = res.headers.get('next');
				res.json();
			})
			.then((data) => {
				setData(data);
				setLoading(false);
			});
	}, []);

	if (isLoading) {
		return (
			<Row justify='center' align='center'>
				<Loading size='xl' type='points' />
			</Row>
		);
	}

	if (!data) {
		return (
			<>
				<Row justify='center' align='center'>
					<Text h2>Something went wrong.</Text>
				</Row>
				<Row justify='center' align='center'>
					<Text h2>Please refresh the page and try again.</Text>
				</Row>
			</>
		);
	}

	console.log('data (<CharactersList />) = ', data);
	return (
		<>
			{data.results.map((character, index) => (
				<CharacterItem
					character={character}
					characterId={index + 1}
					key={index}
				/>
			))}
		</>
	);
}
