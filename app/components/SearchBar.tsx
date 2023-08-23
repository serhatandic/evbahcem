'use client';

import Fuse from 'fuse.js';
import { debounce } from 'debounce';
import sicknesses from '../data/data.json';
import articles from '../data/saglikRehberi.json';
import { useEffect, useState } from 'react';

type Props = {
	passFilteredData: (data: Array<Item>) => void;
};

type Item = {
	title: string;
	index: number;
	source: string;
};

type Event = {
	target: {
		value: string;
	};
};

const SearchBar = ({ passFilteredData }: Props) => {
	const [searchQuery, setSearchQuery] = useState('');
	const [filteredData, setFilteredData] = useState<Array<Item>>([]);
	const allData = [
		...Object.values(sicknesses).map((item) => ({
			...item,
			source: 'sicknesses',
		})),
		...Object.values(articles).map((item) => ({
			...item,
			source: 'articles',
		})),
	];
	useEffect(() => {
		if (!searchQuery) return setFilteredData([]);

		const fuse = new Fuse(allData, {
			keys: ['title', 'entryParagraph'],
			shouldSort: true,
			includeScore: true,
			threshold: 0.4, // You can adjust this value based on how strict you want the matching to be
		});

		const results = fuse.search(searchQuery);

		setFilteredData(
			results.map(({ item, refIndex }) => {
				if (item.source === 'articles') {
					return {
						title: item.title,
						index: refIndex - Object.keys(sicknesses).length,
						source: item.source,
					};
				}
				return {
					title: item.title,
					index: refIndex,
					source: item.source,
				};
			})
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchQuery]);

	useEffect(() => {
		passFilteredData(filteredData);
	}, [filteredData, passFilteredData]);

	const handleSearch = (e: Event) => {
		setSearchQuery(e.target.value);
	};
	return (
		<div className='flex flex-col relative w-full'>
			<input
				className='w-10/12 md:w-11/12 focus:outline-none'
				placeholder='Arama yapın'
				onChange={debounce(handleSearch, 500)}
			/>
		</div>
	);
};

export default SearchBar;
