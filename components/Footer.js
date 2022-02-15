import Image from 'next/image';
import { Col, Text, Spacer, Link } from '@nextui-org/react';

export default function Footer() {
	return (
		<Col align='center'>
			<Spacer y={7} />
			<Text>
				Powered by{' '}
				<Link href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'>
					<Image src='/vercel.svg' alt='Vercel Logo' width={60} height={12} />
				</Link>
			</Text>
			<Spacer y={1} />
		</Col>
	);
}
