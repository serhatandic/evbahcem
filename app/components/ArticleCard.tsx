import Link from 'next/link';
import readingTime from 'reading-time';
import { createURLFriendlyString } from '../utils/createUrlFriendlyString';
import Image from 'next/image';

type ArticleCardProps = {
	id: number;
	article: {
		title: string;
		entryParagraph: string;
		entryImage: string;
		sections: Array<{
			header: string;
			content: string;
		}>;
	};
};

const ArticleCard = ({ article, id }: ArticleCardProps) => {
	const titleWithoutSpecials = createURLFriendlyString(article.title);
	const wholeText = article.sections
		.map((section) => section.content)
		.join(' ');
	return (
		<Link
			className='w-full bg-white inline-block mb-4 rounded-lg shadow-md hover:shadow-lg transition-shadow'
			href={`articles/${id}/${titleWithoutSpecials}`}
		>
			<Image
				className='mb-2 object-cover rounded-t-lg'
				alt={article.entryImage.split('/').slice(-1)[0].split('.')[0]}
				src={article.entryImage}
				width={1920}
				height={1080}
			/>
			<div className='p-4'>
				<h1 className='text-2xl font-semibold'>{article.title}</h1>

				<p className='mt-4'>
					{article.entryParagraph?.slice(0, 250) + '...'}
				</p>
			</div>
			<div className='flex p-4  mt-8 justify-between items-end'>
				<p className='opacity-80 text-xs text-gray-800'>
					{readingTime(wholeText).text[0] + ' dakikalık okuma'}
				</p>
				<div className='flex justify-end mt-auto'>
					<button className='bg-gray-800 text-white rounded-lg px-4 py-2 mt-2'>
						Details
					</button>
				</div>
			</div>
		</Link>
	);
};

export default ArticleCard;
