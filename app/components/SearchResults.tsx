import Link from 'next/link';

type Props = {
	data: Array<Item>;
	searchQuery: string;
	searchBarHasFocus: boolean;
};

type Item = {
	title: string;
	index: string;
	source: string;
};

const SearchResults = ({ data, searchQuery, searchBarHasFocus }: Props) => {
	return (
		<>
			{searchQuery && searchBarHasFocus && (
				<div className='absolute top-16 w-9/12 md:w-6/12 lg:w-5/12 z-10'>
					{data.length ? (
						data.slice(0, 3)?.map((item: Item) => {
							const titleWithoutSpaces = item.title.replace(
								/\s/g,
								'-'
							);
							return (
								<Link
									key={item.title}
									href={`${
										item.source === 'sicknesses'
											? 'diseases'
											: 'articles'
									}/${item.index}/${titleWithoutSpaces}`}
								>
									<div className=' bg-white gap-2 border-b-2 p-2'>
										{item.title}
									</div>
								</Link>
							);
						})
					) : (
						<div className=' bg-white gap-2 border-b-2 p-2'>
							Aramazına uygun sonuç bulunamadı
						</div>
					)}
				</div>
			)}
		</>
	);
};

export default SearchResults;
