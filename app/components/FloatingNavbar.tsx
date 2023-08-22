import Link from 'next/link';
import SearchBar from './SearchBar';

const FloatingNavbar = () => {
	return (
		<div className='flex justify-center'>
			<nav className='navbar navbar-expand-lg navbar-light bg-light h-12 w-full bg-white mt-7 rounded-full flex items-center justify-between'>
				<h2 className='ml-4 font-medium'>Belirtiler</h2>
				<SearchBar />
				<Link href='/hastaliklar'>
					<button className='mr-2 bg-black rounded-full p-2 text-xs font-semibold text-white'>
						Şimdi Keşfet
					</button>
				</Link>
			</nav>
		</div>
	);
};

export default FloatingNavbar;
