import Link from 'next/link';
import readingTime from 'reading-time';

type ArticleCardProps = {
	id: number;
	article: {
		title: string;
		sections: Array<{
			header: string;
			content: string;
		}>;
	};
};

const createURLFriendlyString = (str: string) => {
	// Remove special characters and replace with space
	const cleanedString = str.replace(/[^a-zA-Z0-9 ]/g, ' ');

	// Trim any leading or trailing spaces and replace spaces with hyphens
	const urlFriendlyString = cleanedString
		.trim()
		.replace(/\s+/g, '-')
		.toLowerCase();

	return urlFriendlyString;
};

const ArticleCard = ({ article, id }: ArticleCardProps) => {
	const titleWithoutSpecials = createURLFriendlyString(article.title);
	const wholeText = article.sections
		.map((section) => section.content)
		.join(' ');
	return (
		<div className='w-12/12  bg-orange-100 rounded-2xl p-4 flex flex-col justify-between'>
			<div>
				<h3 className='text-2xl font-semibold'>{article.title}</h3>
				<p className='mt-4'>
					{article.sections[0].content?.slice(0, 250) + '...'}
				</p>
			</div>
			<div className='flex  mt-8 justify-between items-end'>
				<p className='opacity-80 text-xs text-gray-800'>
					{readingTime(wholeText).text}
				</p>
				<div className='flex justify-end mt-auto'>
					<Link
						className='bg-gray-800 text-white rounded-lg px-4 py-2 mt-2'
						href={`articles/${id}/${titleWithoutSpecials}`}
					>
						<button>Details</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ArticleCard;
