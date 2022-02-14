import React, { useState, useEffect } from 'react';
import CharacterItem from './CharacterItem';
import { Grid, Loading, Text, Row } from '@nextui-org/react';

export default function CharactersList(props) {
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch('https://swapi.dev/api/people/')
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			});
	}, []);

	if (isLoading) return <Loading size='xl' type='points' />;
	if (!data) return <Text h2>Something went wrong. Please try again.</Text>;
	console.log({ data });
	return (
		<>
			{data.results.map((character, index) => (
				<CharacterItem character={character} key={index + 1} />
			))}
		</>
	);
}
