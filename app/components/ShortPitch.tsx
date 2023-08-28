type ShortPitchProps = {
	className: string;
};

const ShortPitch = ({ className }: ShortPitchProps) => {
	return (
		<div className={className}>
			<div className='self-center mt-14 sm:mt-36 font-bold text-6xl'>
				Unleash Adventure, Embrace Nature.
			</div>
			<div className='mt-8'>
				Your Ultimate Outdoor Guide: Elevate Your Camping Experience
				with Tips, Destinations, and Essential Gear!
			</div>
		</div>
	);
};

export default ShortPitch;
