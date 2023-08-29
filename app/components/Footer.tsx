import Link from 'next/link';

const Footer = () => {
	return (
		<div className='relative mt-20 bottom-0 w-full '>
			<div className='flex flex-col items-center justify-center bg-gray-800 text-white p-8'>
				<div className='flex items-center justify-center gap-4'>
					<Link href='/privacy-policy'>
						<p className='text-xs'>Privacy Policy</p>
					</Link>
					{/* <Link href='/terms-of-service'>
						<p className='text-xs'>Terms of Service</p>
					</Link> */}
					<Link href='/about'>
						<p className='text-xs'>About</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
