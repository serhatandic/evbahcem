import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './components/Providers';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'CampingAtWild.com - Your Ultimate Destination for Outdoor Adventure',

	description:
		"Explore the great outdoors like never before with CampingAtWild.com. We offer tips, guides, and essentials for camping in untamed nature. From must-visit locations to how to camp safely, we've got you covered.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className='bg-orange-200' lang='en'>
			<head></head>
			<body
				className={`${inter.className} flex flex-col justify-between`}
			>
				<div className='bg-orange-200 text-gray-800 h-full min-h-screen'>
					<Providers>{children}</Providers>
					<Analytics />
				</div>
				<Footer />
			</body>
		</html>
	);
}
