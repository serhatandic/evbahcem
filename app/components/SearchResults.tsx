import Link from 'next/link';

type Props = {
	data: Array<Item>;
};

type Item = {
	title: string;
	index: number;
};

const SearchResults = ({ data }: Props) => {
	return (
		<div className='absolute top-16 w-8/12 md:w-6/12 lg:w-5/12'>
			{data.slice(0, 3)?.map((item: Item) => {
				return (
					<Link key={item.title} href={`hastaliklar/${item.index}`}>
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
