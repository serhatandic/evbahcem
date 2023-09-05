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
			className='w-12/12  bg-orange-100 rounded-2xl p-4 flex flex-col justify-between'
			href={`articles/${id}/${titleWithoutSpecials}`}
		>
			<div>
				<div className='relative h-52 sm:h-96 md:h-52 lg:h-64 w-full mb-4'>
					<Image
						alt={
							article.entryImage
								.split('/')
								.slice(-1)[0]
								.split('.')[0]
						}
						src={article.entryImage}
						layout='fill'
					/>
				</div>
				<h1 className='text-2xl font-semibold'>{article.title}</h1>

				<p className='mt-4'>
					{article.sections[0].content?.slice(0, 250) + '...'}
				</p>
			</div>
			<div className='flex  mt-8 justify-between items-end'>
				<p className='opacity-80 text-xs text-gray-800'>
					{readingTime(wholeText).text}
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
