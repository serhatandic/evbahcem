'use client';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ArticleCard from './ArticleCard';
import articles from '../data/saglikRehberi.json';

const ArticleGrid = () => {
	const [sliceEnd, setSliceEnd] = useState(12);
	const partToBeShown = Object.values(articles)
		.slice(0, sliceEnd)
		.map((sickness, idx) => (
			<ArticleCard key={idx} article={sickness} id={idx} />
		));
	return (
		<InfiniteScroll
			dataLength={sliceEnd}
			next={() => {
				setSliceEnd(sliceEnd + 12);
			}}
			hasMore={true}
			loader={<h4 className=''>Loading...</h4>}
			endMessage={
				<p style={{ textAlign: 'center' }}>
					<b>Yayınlanan tüm makaleler bu kadar!</b>
				</p>
			}
		>
			<div className='md:p-24 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-4'>
				{partToBeShown}
			</div>
		</InfiniteScroll>
	);
};

export default ArticleGrid;
