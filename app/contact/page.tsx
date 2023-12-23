export const metadata = {
	title: 'İletişim',
	description:
		"Ev bahçeciliği hakkında sorularınız mı var? Kişiselleştirilmiş tavsiye ve rehberlik için Hamide'ye ulaşın.",
};

const Contact = () => {
	return (
		<>
			<div className='p-4 md:px-36 lg:px-60 xl:px-80'>
				<div className='bg-white p-8'>
					<h1 className='text-2xl font-bold'>
						Bizimle iletişime geçin
					</h1>

					<p>
						Sizden haber almak isteriz! İster bahçecilik hakkındaki
						sorularınız, ister makale önerileriniz, herhangi bir şey
						için çekinmeden ulaşabilirsiniz.
					</p>

					<h2 className='text-lg font-bold'>Email</h2>
					<p>
						<a href='mailto:evbahcem@gmail.com'>
							evbahcem@gmail.com
						</a>
					</p>

					<h2 className='text-lg font-bold'>Sıkça Sorulan Sorular</h2>
					<ul>
						<li>
							<strong>Ne kadar sürede geri dönüş alırım</strong>
							<ul>
								<li>
									48 saat içinde dönüş yapmaya çalışıyorum
								</li>
							</ul>
						</li>
						<li>
							<strong>
								Web sitenizde makale önerileri yapabilir miyim?
							</strong>
							<ul>
								<li>
									Kesinlikle, bana e-posta ile önerinizi
									göndermekten çekinmeyin.
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Contact;
