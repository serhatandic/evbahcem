import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

type DiveInButtonProps = {
	className: string;
};

const DiveInButton = ({ className }: DiveInButtonProps) => {
	return (
		<div className={`flex justify-between gap-4 ` + className}>
			<Link
				className='h-24 md:h-28 w-12/12 md:w-6/12 bg-white shadow-2xl rounded-3xl text-md  mt-16 font-semibold flex flex-col justify-start pl-4 pt-2'
				href='/articles'
			>
				<div className='flex gap-2 justify-start'>
					<button className=''>İçerikler</button>
					<div className=''>
						<ArrowForwardIcon />
					</div>
				</div>
				<p className='text-xs font-light md:block'>
					Uzman yazarlar tarafından hazırlanan rehberler.
					Sürdürülebilir yaşam ve ev bahçeciliği için nihai
					kaynağınız.
				</p>
			</Link>
		</div>
	);
};

export default DiveInButton;
