type ShortPitchProps = {
	className: string;
};

const ShortPitch = ({ className }: ShortPitchProps) => {
	return (
		<div className={className}>
			<div className='self-center mt-14 sm:mt-36 font-bold text-7xl'>
				Correct Cue, Healthy Life.
			</div>
			<div className='mt-8'>
				Your Health Is Now In Your Hands: Shape Your Life with Diseases,
				Symptoms, and Natural Treatment Methods!
			</div>
		</div>
	);
};

export default ShortPitch;
