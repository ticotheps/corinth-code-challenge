import PageHead from '../components/PageHead';
import { NextUIProvider } from '@nextui-org/react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<NextUIProvider>
			<PageHead />
			<Component {...pageProps} />
		</NextUIProvider>
	);
}

export default MyApp;
