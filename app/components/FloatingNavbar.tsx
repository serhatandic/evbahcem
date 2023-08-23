'use client';
import Link from 'next/link';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { useState } from 'react';

type Data = Array<Item>;

type Item = {
	title: string;
	index: string;
	source: string;
};

const FloatingNavbar = () => {
	const [searchResults, setSearchResults] = useState<Array<Item>>([]);
	const [navbarShape, setNavbarShape] = useState('rounded-full');

	const passFilteredData = (data: Data) => {
		setSearchResults(data);
		if (data.length === 0) {
			setNavbarShape('rounded-full');
		} else {
			setNavbarShape('rounded-t-3xl rounded-b-none');
		}
	};
	return (
		<div className='flex justify-center'>
			<nav
				className={`navbar navbar-expand-lg navbar-light bg-light h-12 w-full bg-white mt-7  flex items-center gap-8 ${navbarShape}`}
			>
				<Link href='/'>
					<h2 className='ml-4 font-medium'>Belirti.org</h2>
				</Link>
				<SearchBar passFilteredData={passFilteredData} />
			</nav>
			<SearchResults data={searchResults} />
		</div>
	);
};

export default FloatingNavbar;
