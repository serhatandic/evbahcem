'use client';
import FloatingNavbar from './components/FloatingNavbar';
import ShortPitch from './components/ShortPitch';
import DiveInButtons from './components/DiveInButtons';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';

type BlurState = {
	blur: {
		isBlurred: boolean;
	};
};

export default function Home() {
	const blur = useSelector((state: BlurState) => state.blur.isBlurred);
	return (
		<div className='flex justify-center pb-8'>
			<div className='flex flex-col w-9/12 md:w-6/12 lg:w-5/12 '>
				<div className='mt-12'>
					<FloatingNavbar source={'main'} />
				</div>
				<ShortPitch className={`${blur ? 'blur-md' : 'blur-none'}`} />
				<DiveInButtons
					className={` ${blur ? 'blur-md' : 'blur-none'}`}
				/>
				{/* <div>
					<h6 className='text-xs absolute bottom-2 left-15 self-center'>
						<Link href='/privacy-policy'>Privacy Policy</Link>
					</h6>
				</div> */}
			</div>
		</div>
	);
}
