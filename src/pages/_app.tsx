import '../styles/global.css';

import localFont from '@next/font/local';
import type { AppProps } from 'next/app';

const GTHaptik = localFont({
	src: [
		{
			path: '../../public/fonts/GT-Haptik-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../public/fonts/GT-Haptik-Regular-2.ttf',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--GTHaptik',
});

const inter = localFont({
	src: [
		{
			path: '../../public/fonts/Inter-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Inter-Bold.ttf',
			weight: '600',
			style: 'normal',
		},
	],
	variable: '--inter',
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className={`${inter.variable} ${GTHaptik.variable} font-inter`}>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
