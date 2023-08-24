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
				href='/hastaliklar'
			>
				<div className='flex gap-2 justify-center md:justify-start'>
					<button className=''>Hastalıklar</button>
					<div className=''>
						<ArrowForwardIcon />
					</div>
				</div>
				<p className='text-xs font-light hidden md:block'>
					Hastalıklar, belirtiler ve tedaviler hakkında detaylı
					bilgiler.
				</p>
			</Link>
			<Link
				className='h-12 md:h-24 w-6/12 bg-orange-100 rounded-3xl text-md  mt-16 font-semibold flex flex-col justify-start pl-4 pt-2'
				href='/makaleler'
			>
				<div className='flex gap-2 justify-center md:justify-start'>
					<button className=''>Makaleler</button>
					<div className=''>
						<ArrowForwardIcon />
					</div>
				</div>
				<p className='text-xs font-light  hidden md:block'>
					Sağlık ve yaşam konularında uzmanlardan makaleler. Bilinçli
					yaşam kılavuzunuz.
				</p>
			</Link>
		</div>
	);
};

export default DiveInButton;
