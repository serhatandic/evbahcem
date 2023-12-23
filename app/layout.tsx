import './globals.css';
import type { Metadata } from 'next';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
	title: 'Bahçeciliği Keşfet, Doğayla Buluş.',

	description:
		'En Kapsamlı Bahçecilik Rehberiniz: İpuçları, Teknikler ve Gerekli Araçlarla Ev Bahçeciliğinizi İyileştirin! Bitki dikimi ve bahçe bakımının inceliklerini keşfedin.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className='' lang='en'>
			<head>
				<script
					async
					src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7878828610260950'
					crossOrigin='anonymous'
				></script>
			</head>
			<body className='flex flex-col justify-between vsc-initialized'>
				<div className='text-gray-800 h-full min-h-screen'>
					{children}
				</div>
				<Analytics />
				<SpeedInsights />
				<Footer />
			</body>
		</html>
	);
}
