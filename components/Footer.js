import Image from 'next/image';
import Link from 'next/link';
import { Row, Text, Spacer } from '@nextui-org/react';

export default function Footer() {
	return (
		<Row justify='center' align='center'>
			<Spacer y={20} />
			<Text b>Powered by</Text>
			<Spacer x={0.25} />
			<Link href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'>
				<Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
			</Link>
		</Row>
	);
}
