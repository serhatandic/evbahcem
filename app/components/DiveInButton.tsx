import Link from 'next/link';

const DiveInButton = () => {
	return (
		<button className='bg-black rounded-full p-2 text-md h-12 mt-16 font-semibold text-white'>
			<Link href='/hastaliklar'> Keşfet </Link>
		</button>
	);
};

export default DiveInButton;
