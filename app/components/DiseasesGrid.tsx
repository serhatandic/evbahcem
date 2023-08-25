'use client';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import DiseaseCard from './DiseaseCard';
import rawSicknesses from '../data/data.json';
import { useSelector } from 'react-redux';

type SearchResultsState = {
	search: {
		searchResults: Array<Item>;
		searchQuery: string;
	};
};

type Item = {
	title: string;
	index: string;
	source: string;
};

const sicknesses = rawSicknesses as {
	[key: string]: {
		title: string;
		entryParagraph: string;
		sections: Array<{
			header: string;
			content: string;
		}>;
	};
};

const DiseasesGrid = () => {
	const searchResults = useSelector(
		(state: SearchResultsState) => state.search.searchResults
	);
	const searchQuery = useSelector(
		(state: SearchResultsState) => state.search.searchQuery
	);

	const [sliceEnd, setSliceEnd] = useState(12);
	// go over searchresults indexes and get the sicknesses with those indexes
	const itemsFromSearchResults = searchResults.length ? (
		searchResults.map((item: Item) => {
			const id = item.index;
			return <DiseaseCard key={id} sickness={sicknesses[id]} id={id} />;
		})
	) : (
		<p className='px-12'>
			No results found. Please try again with a different search query.
		</p>
	);

	const partToBeShown = searchQuery
		? itemsFromSearchResults
		: Object.values(sicknesses)
				.slice(0, sliceEnd)
				.map((sickness, idx) => (
					<DiseaseCard
						key={idx}
						sickness={sickness}
						id={String(idx)}
					/>
				));
	return (
		<InfiniteScroll
			dataLength={sliceEnd}
			next={() => {
				setSliceEnd(sliceEnd + 12);
			}}
			hasMore={true}
			loader={<p></p>}
			endMessage={
				<p style={{ textAlign: 'center' }}>
					<b>That is all we got</b>
				</p>
			}
		>
			<div className='md:px-24 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-4'>
				{partToBeShown}
			</div>
		</InfiniteScroll>
	);
};

export default DiseasesGrid;
