export const metadata = {
	title: 'Gizlilik Politikası - evbahcem.com',
	description:
		"Hamide'mim Blog'unun kişisel bilgilerinizi nasıl topladığını, kullandığını ve koruduğunu anlamak için Gizlilik Politikamızı okuyun",
};

const PrivacyPolicy = () => {
	return (
		<>
			<div className='p-4 md:px-36 lg:px-60 xl:px-80'>
				<div className='bg-white p-8'>
					<h1 className='font-bold text-2xl'>Gizlilik Politikası</h1>
					<h2 className='font-bold text-lg'>Giriş</h2>
					<p>
						Gizliliğiniz bizim için önemlidir. Bu gizlilik
						politikası, sizden hangi kişisel verileri topladığımızı
						ve bunları nasıl kullandığımızı açıklar.
					</p>
					<h2 className='font-bold text-lg'>Topladığımız Bilgiler</h2>
					<p>
						Kullanıcılarımızdan doğrudan herhangi bir kişisel bilgi
						toplamıyoruz.
					</p>
					<h2 className='font-bold text-lg'>
						Üçüncü Parti Hizmetleri
					</h2>
					<h3 className='font-semibold text-lg'>Google AdSense</h3>
					<p>
						Web sitemizde reklamlar göstermek için Google AdSense
						kullanıyoruz. Google, cihazınız, tarama aktiviteniz ve
						reklamlarla etkileşimleriniz hakkında bilgi toplayabilir
						ve bu bilgileri hedefli reklamcılık amacıyla
						kullanabilir.
						<a
							href='https://policies.google.com/technologies/ads'
							target='_blank'
							rel='noopener noreferrer'
						>
							{/* eslint-disable-next-line react/no-unescaped-entities */}
							Google'ın gizlilik politikasına
						</a>{' '}
						{/* eslint-disable-next-line react/no-unescaped-entities*/}
						bakarak Google'ın bilgilerinizi nasıl kullandığını
						anlayabilirsiniz.
					</p>

					<h2 className='font-bold text-lg'>Haklarınız</h2>
					<p>
						Yerel gizlilik yasalarınıza bağlı olarak, kişisel
						bilgilerinizle ilgili birtakım haklara sahip
						olabilirsiniz. Bu hakları anlamak için lütfen yerel
						gizlilik yasalarınıza danışın.
					</p>
					<h2 className='font-bold text-lg'>
						Bu Gizlilik Politikasındaki Değişiklikler
					</h2>
					<p>
						Gizlilik Politikamızı zaman zaman güncelleyebiliriz.
						Yeni Gizlilik Politikasını bu sayfada yayınlayarak
						herhangi bir değişiklik hakkında sizi bilgilendireceğiz.
					</p>
					<h2 className='font-bold text-lg'>Bize Ulaşın</h2>
					<p>
						Bu Gizlilik Politikası hakkında herhangi bir sorunuz
						varsa, lütfen{' '}
						<a href='mailto:evbahcem@gmail.com'>
							evbahcem@gmail.com
						</a>
						adresinden bize ulaşın.
					</p>
					<p>Last updated: 17/11/2023</p>
				</div>
			</div>
		</>
	);
};

export default PrivacyPolicy;
