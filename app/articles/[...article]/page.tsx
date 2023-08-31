'use client';
import { useEffect, useState } from 'react';
import rawArticles from '../../data/data.json';
import Link from 'next/link';
import readingTime from 'reading-time';
import Image from 'next/image';
import ReferenceTag from '@/app/components/ReferenceTag';

type ArticleParams = {
	params: {
		article: string;
	};
};

const articles = rawArticles as {
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

const Article = ({ params }: ArticleParams) => {
	const [randomKeys, setRandomKeys] = useState<string[]>([]);

	const idx = params.article[0];
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
		<>
			<div className='p-4 md:px-36 lg:px-60 xl:px-80'>
				<div className='bg-orange-100 p-8'>
					<div className='flex gap-2 items-center md:items-center mb-2'>
						<Image
							className='rounded-full'
							src={'/author.png'}
							alt='author'
							width={50}
							height={50}
						/>
						<div className='flex flex-col gap-2'>
							<div className='flex items-start flex-col'>
								<span className='text-gray-800 opacity-80 text-sm md:text-base lg:text-lg'>
									Written by camping expert{' '}
									<Link href={'/about'}>
										<strong>Archibald Whitney</strong>
									</Link>
								</span>
								<p className='opacity-80 text-gray-800 font-normal'>
									{
										readingTime(
											articles[idx].sections
												.map(
													(section) => section.content
												)
												.join(' ')
										).text
									}
								</p>
							</div>
						</div>
					</div>
					<h1 className='text-4xl font-bold mb-2'>
						{articles[idx].title}
					</h1>

					{articles[idx]?.entryImage && (
						<Image
							className='self-center'
							src={articles[idx].entryImage}
							width={600}
							height={200}
							alt={
								articles[idx].entryImage
									.split('/')
									.slice(-1)[0]
									.split('.')[0]
							}
						/>
					)}
					<p className='my-2'>{articles[idx].entryParagraph}</p>

					<div className='bg-orange-50 p-4 my-4'>
						<h2 className='text-2xl'>Table of Contents</h2>
						<div className='mb-4'>
							<ul>
								{articles[idx].sections.map((section, idx) => (
									<li
										className='pb-2 last:pb-0 first:pt-2'
										key={idx}
									>
										<a href={`#${section.header}`}>
											{`-> ${section.header}`}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div>
						{articles[idx].sections.map((section, idx) => (
							<div key={idx}>
								<a id={`${section.header}`}></a>
								<h3 className='text-2xl font-bold my-4'>
									{section.header}
								</h3>
								{section.image && (
									<Image
										src={section.image}
										width={800}
										height={100}
										alt={
											section.image
												.split('/')
												.slice(-1)[0]
												.split('.')[0]
										}
									/>
								)}
								<div
									className='mt-2'
									dangerouslySetInnerHTML={{
										__html: section.content,
									}}
								/>
							</div>
						))}
						<div className='mb-4'></div>
						<div className='flex gap-2 flex-wrap'>
							{articles[idx].references.map((item) => {
								if (!item.url) return null;
								return (
									<ReferenceTag
										key={item.title}
										title={item.title}
										url={item.url}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<div className='bg-gray-800 p-8 w-full '>
				<h2 className='font-bold text-2xl mb-4 text-orange-50'>
					You might also want to read these
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
					{randomKeys.map((key, idx) => (
						<Link
							key={idx}
							href={`/articles/${key}/${articles[
								key
							].title.replace(/\s/g, '-')}`}
						>
							<div className='bg-orange-50 p-4 flex flex-col justify-between rounded-lg h-full'>
								<div>
									<div id={`${articles[key].title}`}></div>
									<h2 className='font-bold'>{`${articles[key].title}`}</h2>
									<p className=''>
										{articles[key].sections[0].content
											.slice(0, 200)
											.split(' ')
											.slice(0, -1)
											.join(' ') + ' ...'}
									</p>
								</div>
								<div className='flex justify-start opacity-80 text-gray-800'>
									{
										readingTime(
											articles[key].sections
												.map(
													(section) => section.content
												)
												.join(' ')
										).text
									}
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	);
};

export default Article;
