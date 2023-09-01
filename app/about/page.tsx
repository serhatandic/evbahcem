import Head from 'next/head';
import Image from 'next/image';

const AboutPage = () => {
	return (
		<>
			<Head>
				<title>About</title>
				<meta
					name='description'
					content='Learn more about Archibald, a seasoned camper with 20 years of experience. Get to know his passion for the great outdoors.'
				/>
			</Head>
			<div className='p-4 md:px-36 lg:px-60 xl:px-80'>
				<div className='bg-orange-100 p-8'>
					<h1 className='text-4xl font-bold'>Who am i ?</h1>
					<div className='flex flex-col md:flex-row gap-4 mt-8 items-center'>
						<Image
							alt='Picture of the author'
							src={'/author.png'}
							width={168.9}
							height={167.6}
							className='rounded-full'
						/>
						<p className='font-normal'>
							My name is{' '}
							<span className='font-bold'>Archibald Whitney</span>{' '}
							and I am a camping enthusiast writing about my
							experiences and the things I learn along the way. I
							have been camping for almost 20 years now and I love
							it. I have a passion for the outdoors and I love to
							share my knowledge with others. I hope you enjoy my
							blog !
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutPage;
