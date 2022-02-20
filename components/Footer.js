import Image from 'next/image';
import { Col, Row, Text, Spacer, Link } from '@nextui-org/react';

export default function Footer() {
	return (
		<Col align='center'>
			<Spacer y={6} />
			<Row align='center' justify='center'>
				<Text>Powered by</Text>
				<Link href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'>
					<Image src='/vercel.svg' alt='Vercel Logo' width={85} height={16} />
				</Link>
			</Row>
			<Spacer y={1} />
			<Row align='center' justify='center'>
				<Text size='0.75rem'>
					&#169; 2022 Thumb Technology Consulting LLC. All Rights Reserved.
				</Text>
			</Row>
			<Spacer y={2} />
		</Col>
	);
}
