import { useState } from 'react';
import { useQuery } from 'react-query';
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
import useDebounce from '../utils/hooks/useDebounce';
import searchCharactersByName from '../utils/searchCharactersByName';
import SearchResults from './SearchResults';

export default function SearchInput() {
	const [searchValue, setSearchValue] = useState('');
	const debouncedSearchValue = useDebounce(searchValue, 300);

	const { isLoading, isError, isSuccess, data } = useQuery(
		['searchCharactersByName', debouncedSearchValue],
		() => searchCharactersByName(debouncedSearchValue),
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
		<Container css={{ maxWidth: '100%' }}>
			<Grid justify='center'>
				<Input
					clearable
					labelPlaceholder='Type character name to search'
					aria-label='Type character name to search'
					type='text'
					size='lg'
					placeholder='xLarge'
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
			</Grid>
			<Grid justify='center'>{renderResult()}</Grid>
		</Container>
	);
}
