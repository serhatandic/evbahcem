'use client';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import ArticleCard from './ArticleCard';
import rawArticles from '../data/saglikRehberi.json';

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

const articles = rawArticles as {
	[key: string]: {
		title: string;
		sections: Array<{
			header: string;
			content: string;
		}>;
	};
};

const ArticleGrid = () => {
	const searchResults = useSelector(
		(state: SearchResultsState) => state.search.searchResults
	);
	const searchQuery = useSelector(
		(state: SearchResultsState) => state.search.searchQuery
	);

	const itemsFromSearchResults = searchResults.length ? (
		searchResults.map((item: Item) => {
			const id = item.index;
			return (
				<ArticleCard key={id} article={articles[id]} id={Number(id)} />
			);
		})
	) : (
		<p className='px-12'>
			No results found. Please try again with a different search query.
		</p>
	);

	const [sliceEnd, setSliceEnd] = useState(12);
	const partToBeShown = searchQuery
		? itemsFromSearchResults
		: Object.values(articles)
				.slice(0, sliceEnd)
				.map((article, id) => (
					<ArticleCard key={id} article={article} id={id} />
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
					<b>That is all we got !</b>
				</p>
			}
		>
			<div className='md:px-24 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-4'>
				{partToBeShown}
			</div>
		</InfiniteScroll>
	);
};

export default ArticleGrid;
