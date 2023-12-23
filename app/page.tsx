import ShortPitch from './components/ShortPitch';
import DiveInButtons from './components/DiveInButtons';

type BlurState = {
	blur: {
		isBlurred: boolean;
	};
};

export default function Home() {
	return (
		<div className='flex justify-center pb-8'>
			<div className='flex flex-col w-9/12 md:w-6/12 lg:w-5/12 mt-12 '>
				<ShortPitch />
				<DiveInButtons />
			</div>
		</div>
	);
}
