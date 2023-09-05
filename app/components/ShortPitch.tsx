type ShortPitchProps = {
	className: string;
};

const ShortPitch = ({ className }: ShortPitchProps) => {
	return (
		<div className={className}>
			<h1 className='self-center mt-14 sm:mt-36 font-bold text-6xl'>
				Unleash Adventure, Embrace Camping.
			</h1>
			<p className='mt-8'>
				Your Ultimate Outdoor Guide: Elevate Your Camping Experience
				with Tips, Destinations, and Essential Gear! Explore great
				outdoors and national parks.
			</p>
		</div>
	);
};

export default ShortPitch;
