type ShortPitchProps = {
	className: string;
};

const ShortPitch = ({ className }: ShortPitchProps) => {
	return (
		<div className={className}>
			<h1 className='self-center mt-14 sm:mt-36 font-bold text-6xl'>
				Bahçeciliği Keşfet, Doğayla Buluş.
			</h1>
			<p className='mt-8'>
				En Kapsamlı Bahçecilik Rehberiniz: İpuçları, Teknikler ve
				Gerekli Araçlarla Ev Bahçeciliğinizi İyileştirin! Bitki dikimi
				ve bahçe bakımının inceliklerini keşfedin.
			</p>
		</div>
	);
};

export default ShortPitch;
