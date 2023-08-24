import Link from 'next/link';

type Props = {
	data: Array<Item>;
};

type Item = {
	title: string;
	index: string;
	source: string;
};

const SearchResults = ({ data }: Props) => {
	return (
		<div className='absolute top-16 w-9/12 md:w-6/12 lg:w-5/12 blur-none'>
			{data.slice(0, 3)?.map((item: Item) => {
				const titleWithoutSpaces = item.title.replace(/\s/g, '-');
				return (
					<Link
						key={item.title}
						href={`${
							item.source === 'sicknesses'
								? 'hastaliklar'
								: 'makaleler'
						}/${item.index}/${titleWithoutSpaces}`}
					>
						<div className=' bg-white gap-2 border-b-2 p-2'>
							{item.title}
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default SearchResults;
