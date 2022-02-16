import React, { useState, useEffect } from 'react';
import CharacterItem from './CharacterItem';
import { Loading, Text, Row, Container } from '@nextui-org/react';

export default function CharactersList() {
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(false);

	const featuredCharactersUrl = 'https://swapi.dev/api/people/';

	useEffect(() => {
		setLoading(true);
		fetch(featuredCharactersUrl)
			.then((res) => res.json())
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

	return (
		<>
			{data.results.map((character, index) => (
				<div key={index}>
					<CharacterItem character={character} />
				</div>
			))}
		</>
	);
}
