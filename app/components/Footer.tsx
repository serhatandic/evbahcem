import Link from 'next/link';

const Footer = () => {
	return (
		<div className='w-full '>
			<div className='flex flex-col items-center justify-center bg-gray-800 text-white p-8'>
				<div className='flex items-center justify-center gap-4'>
					<Link href='/'>
						<p className='text-xs'>Home</p>
					</Link>
					<Link href='/articles'>
						<p className='text-xs'>Articles</p>
					</Link>
					<Link href='/about'>
						<p className='text-xs'>About</p>
					</Link>
					<Link href='/privacy-policy'>
						<p className='text-xs'>Privacy Policy</p>
					</Link>
					<Link href='/terms-of-service'>
						<p className='text-xs'>Terms of Service</p>
					</Link>
					<Link href='/contact'>
						<p className='text-xs'>Contact</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
