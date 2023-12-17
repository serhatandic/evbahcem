export const metadata = {
	title: 'Contact',
	description:
		'Have questions about camping or outdoor adventures? Reach out to Archibald for personalized advice and guidance.',
};

const Contact = () => {
	return (
		<>
			<div className='p-4 md:px-36 lg:px-60 xl:px-80'>
				<div className='bg-white p-8'>
					<h1 className='text-2xl font-bold'>Contact Us</h1>

					<p>
						We would love to hear from you! Whether you have a
						question about camping, an article suggestion, or
						anything else, feel free to reach out. Here are the ways
						you can contact us:
					</p>

					<h2 className='text-lg font-bold'>Email</h2>
					<p>
						You can email us at:{' '}
						<a href='mailto:campingatwild@gmail.com'>
							campingatwild@gmail.com
						</a>
					</p>

					<h2 className='text-lg font-bold'>
						Frequently Asked Questions
					</h2>
					<ul>
						<li>
							<strong>
								How long does it take for you to respond?
							</strong>
							<ul>
								<li>I aim to respond within 48 hours.</li>
							</ul>
						</li>
						<li>
							<strong>
								Can I suggest a topic for an article?
							</strong>
							<ul>
								<li>
									Absolutely! I always welcome suggestions and
									would love to hear your ideas.
								</li>
							</ul>
						</li>
						<li>
							<strong>
								How can I contribute to your website?
							</strong>
							<ul>
								<li>
									If you are interested in contributing,
									please email me your proposal.
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
