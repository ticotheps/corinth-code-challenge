import React, { useState, useCallback } from 'react';
import { Search } from 'react-iconly';
import {
	Container,
	Input,
	Link,
	Col,
	Row,
	Text,
	Spacer,
	Button,
} from '@nextui-org/react';

export default function SearchPage() {
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
		<Container fluid>
			<Spacer y={3} />
			<Col align='center'>
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
				<Spacer y={3} />
				<Row justify='center' align='center'>
					<form>
						<Input
							labelPlaceholder='Search by character name...'
							aria-label='search for a Star Wars character'
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
					</form>
				</Row>
				<Spacer y={5} />
				<Row justify='center' align='center'>
					<Link href='/characters'>
						<Button color='gradient' size='xl' ghost auto rounded>
							View Featured Characters
						</Button>
					</Link>
				</Row>
				<Spacer y={5} />
			</Col>
		</Container>
	);
}
