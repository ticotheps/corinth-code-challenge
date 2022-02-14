import CharacterItem from './CharacterItem';
import { Grid } from '@nextui-org/react';

export default function CharactersList(props) {
	const { characters } = props;

	return (
		<Grid.Container gap={2} justify='center'>
			{characters.map((character) => (
				<Grid xs key={character.id}>
					<CharacterItem character={character} key={character.id} />
				</Grid>
			))}
		</Grid.Container>
	);
}
