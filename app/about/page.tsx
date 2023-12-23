import Image from 'next/image';
export const metadata = {
	title: 'Hakkında',
	description:
		'Hamide hakkında daha fazla bilgi edinin, o 20 yıllık deneyime sahip tecrübeli bir ev bahçeciliği meraklısı. Onun mini bahçelere olan tutkusunu tanıyın.',
};

const AboutPage = () => {
	return (
		<>
			<div className='p-4 md:px-36 lg:px-60 xl:px-80'>
				<div className='bg-white p-8'>
					<h1 className='text-4xl font-bold'>Ben kimim ?</h1>
					<div className='flex flex-col md:flex-row gap-4 mt-8 items-center'>
						<Image
							alt='Picture of the author'
							src={'/author.png'}
							width={168.9}
							height={167.6}
							className='rounded-full'
						/>
						<p className='font-normal'>
							Merhabalar! Ben{' '}
							<span className='font-bold'>Hamide Yaşar</span> ,
							toprağın sihrini keşfetmeye bayılan bir bahçe
							severim. Bir tohumun filizlenişini, çiçeklerin
							açılışını izlemek; her sabah bahçeme selam vermek
							benim için bir olmazsa olmaz. Yaklaşık 20 yıl önce
							küçük bir saksıyla başlayan bu serüven, şimdi tüm
							bir bahçeyi kapsıyor. Yemyeşil yaprakların arasında
							geçen zamanım, bana hem huzur veriyor hem de doğanın
							mucizelerini daha yakından tanımama olanak sağlıyor.
							Bu blogda, sizlere bahçecilik serüvenimin püf
							noktalarını, pratik bilgilerini ve elbette kişisel
							deneyimlerimi aktaracağım. Umarım, bu satırlar sizi
							de kendi yeşil köşenizi yaratmaya teşvik eder.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutPage;
