import Link from 'next/link';

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

	return (
		<div className='w-12/12  bg-orange-100 rounded-2xl p-4 flex flex-col'>
			<h3 className='text-2xl font-semibold'>{article.title}</h3>
			<div className='flex justify-end mt-auto'>
				<Link href={`makaleler/${id}/${titleWithoutSpaces}`}>
					<button className='bg-orange-500 text-white rounded-lg px-4 py-2 mt-8'>
						Detaylar
					</button>
				</Link>
			</div>
		</div>
	);
};

export default ArticleCard;
