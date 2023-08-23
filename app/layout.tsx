import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Belirti.org - Hastalık Rehberiniz',
	description:
		'Belirti.org, hastalıkların belirtilerini, nedenlerini ve tedavi yöntemlerini anlamanıza yardımcı olan kapsamlı bir rehberdir. Sağlıklı bir yaşam için ihtiyacınız olan bilgilere hemen erişin.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className='bg-orange-200' lang='en'>
			<head>
				<script
					async
					src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7878828610260950'
					crossOrigin='anonymous'
				></script>
			</head>
			<body className={inter.className}>
				<div className='bg-orange-200 text-gray-800 h-full'>
					{children}
				</div>
			</body>
		</html>
	);
}
