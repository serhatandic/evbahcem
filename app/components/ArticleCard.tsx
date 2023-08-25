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

const ArticleCard = ({ article, id }: ArticleCardProps) => {
	const titleWithoutSpaces = article.title.replace(/\s/g, '-');
	const wholeText = article.sections
		.map((section) => section.content)
		.join(' ');

	return (
		<div className='w-12/12  bg-orange-100 rounded-2xl p-4 flex flex-col justify-between'>
			<h3 className='text-2xl font-semibold'>{article.title}</h3>
			<div className='flex  mt-8 justify-between items-end'>
				<p className='opacity-25 text-xs'>
					{readingTime(wholeText).text}
				</p>
				<div className='flex justify-end mt-auto'>
					<Link
						className='bg-orange-500 text-white rounded-lg px-4 py-2 mt-8'
						href={`articles/${id}/${titleWithoutSpaces}`}
					>
						<button>Details</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ArticleCard;
