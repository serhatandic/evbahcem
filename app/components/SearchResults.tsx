import Link from 'next/link';

type Props = {
	data: Array<Item>;
};

type Item = {
	title: string;
	index: string;
};

const SearchResults = ({ data }: Props) => {
	console.log(data);
	return (
		<div className='absolute top-9'>
			{data.slice(0, 10)?.map((item: Item) => {
				return (
					<Link key={item.title} href={`hastaliklar/${item.index}`}>
						<div className='w-96 bg-white gap-2 border-b-2 p-2 '>
							{item.title}
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default SearchResults;
