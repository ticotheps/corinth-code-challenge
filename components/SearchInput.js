import React, { useState, useCallback } from 'react';
import { Search } from 'react-iconly';
import { Input, Button } from '@nextui-org/react';

export default function SearchInput() {
	const [query, setQuery] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const searchUrl = (query) => `https://swapi.dev/api/people/?search=${query}`;

	const onClickHandler = useCallback((e) => {
		console.log('onClickHandler() function has been triggered!');
		console.log("The current 'query' string is: ", query);
		if (query.length >= 1) {
			fetch(searchUrl(query))
				.then((res) => res.json())
				.then((data) => {
					setSearchResults(data);
					console.log({ data });
					console.log('Search Results: ', searchResults);
				});
		}
	}, []);

	const onChangeHandler = (e) => {
		setQuery(e.target.value);
		console.log({ query });
	};
	return (
		<>
			<Input
				labelPlaceholder='Search by character name'
				aria-label='Search by character name'
				type='text'
				value={query}
				width='85vw'
				clearable
				onChange={(e) => onChangeHandler(e)}
				contentRightStyling={false}
				contentRight={
					<Button
						auto
						color='gradient'
						icon={<Search fill='currentColor' />}
						onClick={(e) => onClickHandler(e)}
					/>
				}
			/>
		</>
	);
}
