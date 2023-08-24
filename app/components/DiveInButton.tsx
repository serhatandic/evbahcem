import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const DiveInButton = () => {
	return (
		<div className='flex justify-between gap-4'>
			<Link
				className=' h-24 w-6/12 bg-orange-100 rounded-3xl p-2 text-md  mt-16 font-semibold flex flex-col justify-center items-center'
				href='/hastaliklar'
			>
				<div className='flex gap-2'>
					<button className=''>Hastalıkları Keşfet</button>
					<div className=''>
						<ArrowForwardIcon />
					</div>
				</div>
				<p className='text-xs font-light pl-5'>
					Hastalıklar, belirtiler ve tedaviler hakkında detaylı
					bilgiler. İhtiyacınız olan bilgilere kolayca ulaşın.
				</p>
			</Link>
			<Link
				className='h-24 w-6/12 bg-orange-100 rounded-3xl p-2 text-md  mt-16 font-semibold flex flex-col justify-center items-center'
				href='/makaleler'
			>
				<div className='flex gap-2'>
					<button className=''>Makalelere Göz At</button>
					<div className=''>
						<ArrowForwardIcon />
					</div>
				</div>
				<p className='text-xs font-light pl-5'>
					Sağlık ve yaşam konularında uzmanlardan makaleler. Bilinçli
					yaşam kılavuzunuz.
				</p>
			</Link>
		</div>
	);
};

export default DiveInButton;
