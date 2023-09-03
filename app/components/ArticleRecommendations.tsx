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
				{ length: 4 },
				() => keys.splice(Math.floor(Math.random() * keys.length), 1)[0]
			)
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [idx]);
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
			{randomKeys.map((key, idx) => (
				<Link
					key={idx}
					href={`/articles/${key}/${createURLFriendlyString(
						articles[key].title
					)}`}
				>
					<div className='bg-orange-50 p-4 flex flex-col justify-between rounded-lg h-full'>
						<Image
							className=''
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
