import Image from 'next/image';
import authorPic from './ author.png';

const AboutPage = () => {
	return (
		<div className='p-8 md:px-36 lg:px-60 xl:px-80'>
			<div className='bg-orange-100 p-8'>
				<h1 className='text-4xl font-bold'>Who am i ?</h1>
				<div className='flex gap-2 mt-8'>
					<Image
						alt='Picture of the author'
						src={authorPic}
						width={168.9}
						height={167.6}
						className='rounded-full'
					/>
					<p className='font-normal'>
						My name is{' '}
						<span className='font-bold'>Archibald Whitney</span> and
						I am a camping enthusiast writing about my experiences
						and the things I learn along the way. I have been
						camping for almost 20 years now and I love it. I have a
						passion for the outdoors and I love to share my
						knowledge with others. I hope you enjoy my blog !
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
