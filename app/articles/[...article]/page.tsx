import { Metadata, ResolvingMetadata } from 'next';
import rawArticles from '../../data/data.json';
import Link from 'next/link';
import readingTime from 'reading-time';
import Image from 'next/image';
import ReferenceTag from '@/app/components/ReferenceTag';
import ArticleRecommendations from '@/app/components/ArticleRecommendations';
import { createURLFriendlyString } from '@/app/utils/createUrlFriendlyString';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { JSX, SVGProps } from 'react';

type ArticleParams = {
	params: {
		article: string;
	};
};

const articles = rawArticles as {
	[key: string]: {
		timestamp: string;
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

export async function generateMetadata(
	{ params }: ArticleParams,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const idx = params.article[0];
	const article = articles[idx];
	const title = article.title;
	const titleWithoutSpecials = createURLFriendlyString(title);
	const description = article.entryParagraph;
	const imageRelative = article.entryImage;
	const imageUrl = new URL(`https://campingatwild.com${imageRelative}`);
	const url = `https://campingatwild.com/articles/${idx}/${titleWithoutSpecials}`;
	const metadata: Metadata = {
		title,
		description,
		metadataBase: new URL(url),
		openGraph: {
			title,
			description,
			images: [
				{
					url: imageUrl,
					alt: imageRelative.split('/').slice(-1)[0].split('.')[0],
				},
			],
			url,
		},
	};
	return metadata;
}

const Article = ({ params }: ArticleParams) => {
	const idx = params.article[0];
	const readingtime = readingTime(
		articles[idx].sections.map((section) => section.content).join(' ')
	).text;
	const readingtimeTurkish = readingtime[0] + ' dakikalık okuma';
	return (
		<div className='bg-white'>
			<div className='p-4 md:px-[10%] lg:px-[20%] xl:px-[27%]'>
				<article className='shadow-2xl rounded-t-lg overflow-hidden'>
					<Image
						alt='Sunset over the garden'
						className='w-full h-64 object-cover '
						height='256'
						src={articles[idx].entryImage}
						style={{
							aspectRatio: '1024/256',
							objectFit: 'cover',
						}}
						width='1024'
					/>
					<div className=' p-8 bg-white'>
						{/* <Breadcrumbs
							aria-label='breadcrumb'
							className='mb-4 pl-1'
						>
							<Link href={'/'} className='text-gray-800'>
								Ana Sayfa
							</Link>
							<Link href={'/articles'} className='text-gray-800'>
								Makaleler
							</Link>
							<span className='text-gray-800'>
								{articles[idx].title
									.split(' ')
									.slice(0, 2)
									.join(' ') + ' ...'}
							</span>
						</Breadcrumbs> */}
						<nav aria-label='Breadcrumb' className='mb-6'>
							<ol className='list-none p-0 inline-flex flex-wrap space-x-0 sm:space-x-2'>
								<li className='flex items-center'>
									<Link href={'/'}>Ana Sayfa</Link>
									<ForwardIcon className='w-4 h-4 mx-2' />
								</li>
								<li className='flex items-center'>
									<Link href={'/articles'}>Makaleler</Link>
									<ForwardIcon className='w-4 h-4 mx-2' />
								</li>
								<li>
									<a
										aria-current='page'
										className='text-gray-500'
										href='#'
									>
										{articles[idx].title
											.split(' ')
											.slice(0, 2)
											.join(' ') + ' ...'}
									</a>
								</li>
							</ol>
						</nav>
						<div className='flex flex-col sm:flex-row items-start text-sm text-gray-500 space-y-2 sm:space-y-0 sm:space-x-2 mb-4'>
							<div className='flex items-center'>
								<CalendarIcon className='text-gray-400 w-5 h-5 mr-2' />
								<span>
									{articles[idx].timestamp} by Archibald
									Whitney
								</span>
							</div>
							<span className='hidden sm:inline'>•</span>
							<span>{readingtimeTurkish}</span>
						</div>
						{/* <div className='flex gap-2 items-center md:items-center mb-2'>
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
										{readingtimeTurkish}
									</p>
								</div>
							</div>
						</div> */}
						<h1 className='text-4xl font-bold mb-2'>
							{articles[idx].title}
						</h1>
						<p className='my-2'>{articles[idx].entryParagraph}</p>
						<div className=' text-gray-800'>
							<h2 className='text-2xl font-bold'>İçindekiler</h2>
							<div className='mb-4'>
								<ul>
									{articles[idx].sections.map(
										(section, idx) => (
											<li
												className='pb-2 last:pb-0 first:pt-2'
												key={idx}
											>
												<a href={`#${section.header}`}>
													{`-> ${section.header}`}
												</a>
											</li>
										)
									)}
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
							{articles[idx].references[0].url !== '' && (
								<h3 className='my-4 text-2xl font-bold'>
									References
								</h3>
							)}
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
				</article>
				<div className='bg-gray-800 p-8 w-full '>
					<h2 className='font-bold text-2xl mb-4 text-white'>
						You might also want to read these
					</h2>
					<ArticleRecommendations idx={idx} articles={articles} />
				</div>
			</div>
		</div>
	);
};

function CalendarIcon(
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<rect width='18' height='18' x='3' y='4' rx='2' ry='2' />
			<line x1='16' x2='16' y1='2' y2='6' />
			<line x1='8' x2='8' y1='2' y2='6' />
			<line x1='3' x2='21' y1='10' y2='10' />
		</svg>
	);
}

function ForwardIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<polyline points='15 17 20 12 15 7' />
			<path d='M4 18v-2a4 4 0 0 1 4-4h12' />
		</svg>
	);
}

export default Article;
