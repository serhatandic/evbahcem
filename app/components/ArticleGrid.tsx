'use client';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ArticleCard from './ArticleCard';
import rawArticles from '../data/data.json';

const articles = rawArticles as {
	[key: string]: {
		timestamp: string;
		title: string;
		entryParagraph: string;
		entryImage: string;
		sections: Array<{
			header: string;
			content: string;
		}>;
	};
};

const ArticleGrid = () => {
	const [sliceEnd, setSliceEnd] = useState(12);
	const articlesArray = Object.values(articles);
	const partToBeShown = articlesArray
		.reverse()
		.slice(0, sliceEnd)
		.map((article, id) => (
			<ArticleCard
				key={articlesArray.length - id - 1}
				article={article}
				id={articlesArray.length - id - 1}
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
					<b>That is all we got !</b>
				</p>
			}
		>
			<div className='columns-1 sm:columns-2 lg:columns-3 gap-6 p-4'>
				{partToBeShown}
			</div>
		</InfiniteScroll>
	);
};

export default ArticleGrid;
