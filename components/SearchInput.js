import {
	Container,
	Grid,
	Input,
	Button,
	Spacer,
	Loading,
	Col,
	Row,
	Text,
} from '@nextui-org/react';
import { useQuery } from 'react-query';
import { useState } from 'react';
import useDebounce from '../utils/hooks/useDebounce';
import searchCharacters from '../utils/searchCharacters';
import SearchResults from './SearchResults';

export default function SearchInput() {
	const [searchValue, setSearchValue] = useState('');
	const debouncedSearchValue = useDebounce(searchValue, 300);

	const { isLoading, isError, isSuccess, data } = useQuery(
		['searchCharacters', debouncedSearchValue],
		() => searchCharacters(debouncedSearchValue),
		{
			enabled: debouncedSearchValue.length > 0,
		}
	);

	const renderResult = () => {
		if (isLoading) {
			return (
				<Grid>
					<Spacer y={3} />
					<Loading type='points' size='xl' />
				</Grid>
			);
		} else if (isError) {
			return (
				<Grid>
					<Text h3>
						Something went wrong. Please refresh your browser and try again.
					</Text>
				</Grid>
			);
		} else if (isSuccess) {
			return (
				<>
					<Spacer y={1} />
					<Grid.Container gap={1} justify='center'>
						<SearchResults data={data} />
					</Grid.Container>
				</>
			);
		} else {
			return <></>;
		}
	};

	return (
		<>
			<Input
				labelPlaceholder='Search by character name'
				aria-label='Search by character name'
				type='text'
				clearable
				onChange={(e) => setSearchValue(e.target.value)}
				value={searchValue}
				contentRightStyling={false}
				css={{
					width: '100%',
					'@xs': {
						width: '85%',
					},
					'@md': {
						width: '50%',
					},
				}}
			/>
			<Grid justify='center'>{renderResult()}</Grid>
		</>
	);
}
