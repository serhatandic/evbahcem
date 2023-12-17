import LinkIcon from '@mui/icons-material/Link';
import Link from 'next/link';

type Props = {
	title: string;
	url: string;
};

const ReferenceTag = ({ title, url }: Props) => {
	return (
		<Link href={url} className='text-white text-xs font-semibold'>
			<div className='bg-gray-800 rounded-lg px-2 flex gap-2 items-center whitespace-nowrap'>
				<LinkIcon className='text-white' />
				<p>{title}</p>
			</div>
		</Link>
	);
};

export default ReferenceTag;
