import rawSicknesses from '../../data/data.json';

type DiseaseDetailsParams = {
	params: {
		hastalik: string;
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
	const idx = params.hastalik[0];
	return (
		<div className='p-12 md:px-36 lg:px-60 xl:px-80'>
			<h1 className='text-4xl font-bold'>{sicknesses[idx].title}</h1>
			<p className='mt-2 mb-4'>{sicknesses[idx].entryParagraph}</p>
			<div className='bg-orange-100 p-4'>
				<h3 className='text-2xl'>İçindekiler</h3>
				<div className='mb-4'>
					<ul>
						{sicknesses[idx].sections.map((section, idx) => (
							<li key={idx}>
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
						<h3 className='text-2xl'>{section.header}</h3>
						<div
							dangerouslySetInnerHTML={{
								__html: section.content,
							}}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default DiseaseDetails;
