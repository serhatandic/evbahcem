'use client';

import Fuse from 'fuse.js';
import { debounce } from 'debounce';
import sicknesses from '../data/data.json';
import { useEffect, useState } from 'react';
import SearchResults from './SearchResults';

type Props = {
	passFilteredData: (data: Array<Item>) => void;
};

type Item = {
	title: string;
	index: number;
};

type Event = {
	target: {
		value: string;
	};
};

const SearchBar = ({ passFilteredData }: Props) => {
	const [searchQuery, setSearchQuery] = useState('');
	const [filteredData, setFilteredData] = useState<Array<Item>>([]);

	useEffect(() => {
		if (!searchQuery) return setFilteredData([]);

		const fuse = new Fuse(Object.values(sicknesses), {
			keys: ['title', 'entryParagraph'],
			shouldSort: true,
			includeScore: true,
			threshold: 0.4, // You can adjust this value based on how strict you want the matching to be
		});

		const results = fuse.search(searchQuery);

		setFilteredData(
			results.map(({ item, refIndex }) => ({
				title: item.title,
				index: refIndex,
			}))
		);
	}, [searchQuery]);

	useEffect(() => {
		passFilteredData(filteredData);
	}, [filteredData, passFilteredData]);

	const handleSearch = (e: Event) => {
		setSearchQuery(e.target.value);
	};
	return (
		<div className='flex flex-col relative'>
			<input
				className='w-32 focus:outline-none'
				placeholder='Arama yapın'
				onChange={debounce(handleSearch, 500)}
			/>
		</div>
	);
};

export default SearchBar;
