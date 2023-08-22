'use client';

import sicknesses from '../data/data.json';
import { useEffect, useState } from 'react';

const SearchBar = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [filteredData, setFilteredData] = useState([]);

	useEffect(() => {
		setFilteredData(
			Object.values(sicknesses).filter(
				(item) =>
					item.title
						.toLowerCase()
						.includes(searchQuery.toLowerCase()) ||
					item.entryParagraph
						.toLowerCase()
						.includes(searchQuery.toLowerCase())
			)
		);
	}, [searchQuery]);

	const handleSearch = (e) => {
		setSearchQuery(e.target.value);
	};

	return <input placeholder='Arama yapın' onChange={handleSearch} />;
};

export default SearchBar;
