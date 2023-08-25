import rawSicknesses from '../../data/data.json';

type DiseaseDetailsParams = {
	params: {
		disease: string;
	};
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

const DiseaseDetails = ({ params }: DiseaseDetailsParams) => {
	const idx = params.disease[0];
	return (
		<div className='p-8 md:px-36 lg:px-60 xl:px-80'>
			<div className='bg-orange-100 p-8'>
				<h1 className='text-4xl font-bold'>{sicknesses[idx].title}</h1>
				<p className='mt-2 mb-4'>{sicknesses[idx].entryParagraph}</p>
				<div className='bg-orange-50 p-4 my-4'>
					<h3 className='text-2xl'>Table of Contents</h3>
					<div className='mb-4'>
						<ul>
							{sicknesses[idx].sections.map((section, idx) => (
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
					{sicknesses[idx].sections.map((section, idx) => (
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
		</div>
	);
};

export default DiseaseDetails;
