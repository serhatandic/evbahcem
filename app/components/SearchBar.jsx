'use client';

import { debounce } from 'debounce';
import sicknesses from '../data/data.json';
import { useEffect, useState } from 'react';
import SearchResults from './SearchResults';

const SearchBar = ({ passFilteredData }) => {
	const [searchQuery, setSearchQuery] = useState('');
	const [filteredData, setFilteredData] = useState([]);

	useEffect(() => {
		if (!searchQuery) return setFilteredData([]);
		setFilteredData(
			Object.values(sicknesses)
				.map((item, index) => ({ ...item, originalIndex: index }))
				.filter(
					(item) =>
						item.title
							.toLowerCase()
							.includes(searchQuery.toLowerCase()) ||
						item.entryParagraph
							.toLowerCase()
							.includes(searchQuery.toLowerCase())
				)
				.map((item) => ({
					title: item.title,
					index: item.originalIndex,
				}))
		);
	}, [searchQuery]);

	useEffect(() => {
		passFilteredData(filteredData);
	}, [filteredData, passFilteredData]);

	const handleSearch = (e) => {
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
