'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import readingTime from 'reading-time';
import { createURLFriendlyString } from '../utils/createUrlFriendlyString';
import Image from 'next/image';

type Articles = {
	[key: string]: {
		title: string;
		entryParagraph: string;
		entryImage: string;
		references: Array<{
			title: string;
			url: string;
		}>;
		sections: Array<{
			header: string;
			image: string;
			content: string;
		}>;
	};
};

type Params = {
	articles: Articles;
	idx: string;
};

const ArticleRecommendations = ({ idx, articles }: Params) => {
	const [randomKeys, setRandomKeys] = useState<string[]>([]);

	const keys = Object.keys(articles).filter(
		(_, index) => index !== Number(idx)
	);
	useEffect(() => {
		setRandomKeys(
			Array.from(
				{ length: 10 },
				() => keys.splice(Math.floor(Math.random() * keys.length), 1)[0]
			)
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [idx]);
	return (
		<div className='columns-1 md:columns-2 lg:columns-4 xl:columns-5'>
			{randomKeys.map((key, idx) => (
				<Link
					className='inline-block mb-4'
					key={idx}
					href={`/articles/${key}/${createURLFriendlyString(
						articles[key].title
					)}`}
				>
					<div className='bg-gray-100 p-4 flex flex-col rounded-lg h-full'>
						<Image
							className='mb-2'
							src={articles[key].entryImage}
							alt={articles[key].entryImage.split('/').pop()!}
							width={1920}
							height={1080}
						/>
						<div>
							<div>
								<div id={`${articles[key].title}`}></div>

								<h2 className='font-bold'>{`${articles[key].title}`}</h2>
								<p className=''>
									{articles[key].sections[0].content
										.slice(0, 220)
										.split(' ')
										.slice(0, -1)
										.join(' ') + ' ...'}
								</p>
							</div>
							<div className='flex justify-start opacity-80 text-gray-800'>
								{
									readingTime(
										articles[key].sections
											.map((section) => section.content)
											.join(' ')
									).text
								}
							</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default ArticleRecommendations;
