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
			} w-full items-center align-center flex-col sm:flex-row mb-4`}
		>
			<nav className='flex justify-between md:justify-normal gap-2 mb-2 sm:pr-2 sm:mb-0 w-full md:w-auto md:mr-1'>
				<Link
					className={`h-10 text-center flex-1 md:flex-none items-center justify-center rounded-md ${
						source === 'content'
							? 'bg-gray-800 text-white hover:bg-gray-700'
							: 'bg-white text-gray-800 hover:bg-gray-100'
					} px-4 py-2 text-sm font-medium`}
					href='/'
				>
					Ana Sayfa
				</Link>
				{source !== 'articles' ? (
					<Link
						className={`h-10 text-center flex-1 md:flex-none items-center justify-center rounded-md ${
							source === 'content'
								? 'bg-gray-800 text-white hover:bg-gray-700'
								: 'bg-white text-gray-800 hover:bg-gray-100'
						} px-4 py-2 text-sm font-medium `}
						href='/articles'
					>
						Makaleler
					</Link>
				) : (
					<></>
				)}
			</nav>
			{source === 'main' || source === 'articles' ? (
				<FloatingNavbar source={source} />
			) : (
				<></>
			)}
		</header>
	);
}
