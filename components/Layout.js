import PageHead from './PageHead';
import Footer from './Footer';

export default function Layout({ children }) {
	return (
		<>
			<PageHead />
			{children}
			<Footer />
		</>
	);
}
