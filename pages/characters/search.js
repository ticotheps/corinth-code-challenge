import dynamic from 'next/dynamic';
import {
	Container,
	Link,
	Col,
	Row,
	Text,
	Spacer,
	Button,
} from '@nextui-org/react';

const SearchInput = dynamic(() => import('../../components/SearchInput'), {
	ssr: false,
});

export default function SearchPage() {
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
						Find Your Favorites
					</Text>
				</Row>
				<Spacer y={3} />
				<Row justify='center' align='center'>
					<form>
						<SearchInput />
					</form>
				</Row>
				<Spacer y={5} />
				<Row justify='center' align='center'>
					<Link href='/characters'>
						<Button color='gradient' size='xl' ghost auto rounded>
							View All Characters
						</Button>
					</Link>
				</Row>
				<Spacer y={5} />
			</Col>
		</Container>
	);
}
