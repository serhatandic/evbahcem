import rawArticles from '../../data/saglikRehberi.json';
import Link from 'next/link';

type ArticleParams = {
	params: {
		article: string;
	};
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

const Article = ({ params }: ArticleParams) => {
	const idx = params.article[0];
	const keys = Object.keys(articles).filter(
		(_, index) => index !== Number(idx)
	);
	const randomKeys = Array.from(
		{ length: 4 },
		() => keys.splice(Math.floor(Math.random() * keys.length), 1)[0]
	);

	return (
		<div className='p-8 md:px-36 lg:px-60 xl:px-80'>
			<div className='bg-orange-100 p-8'>
				<h1 className='text-4xl font-bold'>{articles[idx].title}</h1>
				<div className='bg-orange-50 p-4 my-4'>
					<h3 className='text-2xl'>Table of Contents</h3>
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
							<h3 className='text-2xl font-bold'>
								{section.header}
							</h3>
							<div
								dangerouslySetInnerHTML={{
									__html: section.content,
								}}
							/>
						</div>
					))}
				</div>
			</div>
			<div className='mt-4 bg-orange-100 p-8'>
				<h2 className='font-bold text-2xl mb-4'>
					You might also want to read about these
				</h2>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
					{randomKeys.map((key, idx) => (
						<div
							key={idx}
							className='bg-orange-50 p-2 flex flex-col justify-between'
						>
							<div>
								<a id={`${articles[key].title}`}></a>
								<h2 className='font-bold'>{`${articles[key].title}`}</h2>
								<p className=''>
									{articles[key].sections[0].content
										.slice(0, 200)
										.split(' ')
										.slice(0, -1)
										.join(' ') + ' ...'}
								</p>
							</div>
							<div className='flex justify-end'>
								<Link
									href={`/articles/${key}/${articles[
										key
									].title.replace(/\s/g, '-')}`}
								>
									<button className='bg-orange-500 flex-1 text-white rounded-lg px-4 py-2 mr-2 my-2'>
										Read More
									</button>
								</Link>
							</div>
						</div>
					))}
				</div>
				<div className='flex justify-between pt-3 gap-3 flex-col sm:flex-row'>
					<Link
						className='bg-orange-500 flex-1 text-white rounded-lg px-4 py-2 flex justify-center'
						href={'/diseases'}
					>
						<button className='flex justify-center text-center'>
							Check Diseases
						</button>
					</Link>
					<Link
						className='bg-orange-500 flex-1 text-white rounded-lg px-4 py-2 flex justify-center'
						href={`/`}
					>
						<button>Home</button>
					</Link>
					<Link
						className='bg-orange-500 flex-1 text-white rounded-lg px-4 py-2 flex justify-center'
						href={`/articles`}
					>
						<button>Check Other Articles</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Article;
