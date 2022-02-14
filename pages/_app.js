import PageHead from '../components/PageHead';
import Footer from '../components/Footer';
import { NextUIProvider } from '@nextui-org/react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<NextUIProvider>
			<PageHead />
			<Component {...pageProps} />
			<Footer />
		</NextUIProvider>
	);
}

export default MyApp;
