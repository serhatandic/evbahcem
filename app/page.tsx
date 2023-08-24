import FloatingNavbar from './components/FloatingNavbar';
import ShortPitch from './components/ShortPitch';
import DiveInButtons from './components/DiveInButtons';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='h-screen flex justify-center'>
			<div className='flex flex-col  w-9/12 md:w-6/12 lg:w-5/12 '>
				<FloatingNavbar />
				<ShortPitch />
				<DiveInButtons />
				{/* <div>
					<h6 className='text-xs absolute bottom-2 left-15 self-center'>
						<Link href='/privacy-policy'>Privacy Policy</Link>
					</h6>
				</div> */}
			</div>
		</div>
	);
}
