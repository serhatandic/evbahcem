import Link from 'next/link';

const DiveInButton = () => {
	return (
		<Link href='/hastaliklar'>
			<div className='h-12 w-full bg-black rounded-full p-2 text-md  mt-16 font-semibold text-white flex flex-col justify-center items-center'>
				<button className=''>Keşfet</button>
			</div>{' '}
		</Link>
	);
};

export default DiveInButton;
