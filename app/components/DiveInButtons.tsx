import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

type DiveInButtonProps = {
	className: string;
};

const DiveInButton = ({ className }: DiveInButtonProps) => {
	return (
		<div className={`flex justify-between gap-4 ` + className}>
			<Link
				className='h-12 md:h-24 w-6/12 bg-orange-100 rounded-3xl text-md  mt-16 font-semibold flex flex-col justify-start pl-4 pt-2'
				href='/diseases'
			>
				<div className='flex gap-2 justify-center md:justify-start'>
					<button className=''>Diseases</button>
					<div className=''>
						<ArrowForwardIcon />
					</div>
				</div>
				<p className='text-xs font-light hidden md:block'>
					Detailed information about diseases, symptoms, and
					treatments.
				</p>
			</Link>
			<Link
				className='h-12 md:h-24 w-6/12 bg-orange-100 rounded-3xl text-md  mt-16 font-semibold flex flex-col justify-start pl-4 pt-2'
				href='/makaleler'
			>
				<div className='flex gap-2 justify-center md:justify-start'>
					<button className=''>Articles</button>
					<div className=''>
						<ArrowForwardIcon />
					</div>
				</div>
				<p className='text-xs font-light  hidden md:block'>
					Articles from experts on health and life topics. Your
					conscious living guide.
				</p>
			</Link>
		</div>
	);
};

export default DiveInButton;
