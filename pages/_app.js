import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Layout from '../components/Layout';
import { NextUIProvider } from '@nextui-org/react';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
	const [queryClient, setQueryClient] = useState(new QueryClient());
	console.log({ queryClient });
	return (
		<QueryClientProvider client={queryClient}>
			<NextUIProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</NextUIProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
