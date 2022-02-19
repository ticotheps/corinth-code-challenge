import dynamic from 'next/dynamic';
import {
	Container,
	Link,
	Col,
	Row,
	Text,
	Spacer,
	Button,
	Grid,
} from '@nextui-org/react';

const SearchInput = dynamic(() => import('../../components/SearchInput'), {
	ssr: false,
});

export default function SearchPage() {
	return (
		<Container fluid>
			<Spacer y={3} />
			<Grid.Container justify='center' align='center'>
				<Grid>
					<Text
						h1
						size='2.3rem'
						css={{
							textGradient: '45deg, $blue500 -5%, $pink500 70%',
							'@xs': {
								textGradient: '45deg, $blue500 -10%, $pink500 50%',
								fontSize: '3.5em',
							},
							'@md': {
								textGradient: '45deg, $blue500 -10%, $pink500 80%',
								fontSize: '4.5rem',
							},
						}}
						weight='bold'
					>
						Find Your Favorites
					</Text>
					<Spacer y={3} />
				</Grid>
				<Grid justify='center' align='center' css={{ width: '100%' }}>
					<SearchInput />
				</Grid>
				<Grid justify='center' align='center'>
					<Spacer y={3} />
					<Link href='/characters'>
						<Button color='gradient' size='xl' ghost auto rounded>
							Browse All Characters
						</Button>
					</Link>
				</Grid>
			</Grid.Container>
		</Container>
	);
}
