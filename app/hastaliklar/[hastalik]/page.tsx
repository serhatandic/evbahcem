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
	return (
		<div className='p-12 sm-p-24'>
			<h1 className='text-4xl font-bold'>
				{sicknesses[params.hastalik].title}
			</h1>
			<p className='mt-2 mb-4'>
				{sicknesses[params.hastalik].entryParagraph}
			</p>
			<h3 className='text-2xl'>İçindekiler</h3>
			<div className='mb-4'>
				<ul>
					{sicknesses[params.hastalik].sections.map(
						(section, idx) => (
							<li key={idx}>{section.header}</li>
						)
					)}
				</ul>
			</div>
			<div>
				{sicknesses[params.hastalik].sections.map((section, idx) => (
					<div key={idx}>
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
