/**
 * v0 by Vercel.
 * @see https://v0.dev/t/HRaXmRANtod
 */
import Link from 'next/link';
import FloatingNavbar from './FloatingNavbar';

type Source = {
	source: string;
};

export default function Component({ source }: Source) {
	return (
		<header
			className={`flex h-16 ${
				source === 'content' ? 'mt-0' : 'mt-7'
			} justify-between`}
		>
			<nav className='flex w-full justify-between items-center'>
				<FloatingNavbar source={source} />
			</nav>
		</header>
	);
}
