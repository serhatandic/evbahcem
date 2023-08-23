import DiseaseCard from './DiseaseCard';
import sicknesses from '../data/data.json';

const DiseasesGrid = () => {
	return (
		<div className='md:p-24 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-4'>
			{Object.values(sicknesses).map((sickness, idx) => (
				<DiseaseCard key={idx} sickness={sickness} id={idx} />
			))}
		</div>
	);
};

export default DiseasesGrid;
