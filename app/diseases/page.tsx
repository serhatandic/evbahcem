import DiseasesGrid from '../components/DiseasesGrid';
import FloatingNavbar from '../components/FloatingNavbar';

const Diseases = () => {
	return (
		<div>
			<div className='md:px-24 px-4'>
				<FloatingNavbar source={'sicknesses'} />
			</div>
			<DiseasesGrid />
		</div>
	);
};

export default Diseases;
