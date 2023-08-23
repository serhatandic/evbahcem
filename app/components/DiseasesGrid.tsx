'use client';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import DiseaseCard from './DiseaseCard';
import sicknesses from '../data/data.json';

const DiseasesGrid = () => {
	const [sliceEnd, setSliceEnd] = useState(12);
	const partToBeShown = Object.values(sicknesses)
		.slice(0, sliceEnd)
		.map((sickness, idx) => (
			<DiseaseCard key={idx} sickness={sickness} id={idx} />
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

export default DiseasesGrid;
