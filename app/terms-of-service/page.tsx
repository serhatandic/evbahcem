export const metadata = {
	title: 'Terms of Service',
	description:
		"Learn about the Terms of Service governing the use of Archibald's Camping Blog. Know your rights and responsibilities while using the website.",
};

const TermsOfService = () => {
	return (
		<>
			<div className='p-4 md:px-36 lg:px-60 xl:px-80'>
				<div className='bg-white p-8'>
					<h1 className='text-2xl font-bold'>
						Terms of Service - CampingAtWild.com
					</h1>

					<p>
						Please read these Terms of Service carefully before
						using the CampingAtWild.com website.
					</p>
					<p>
						Your access to and use of the Website is conditioned
						upon your acceptance of and compliance with these Terms.
						By accessing or using the Website, you agree to be bound
						by these Terms.
					</p>

					<h2 className='text-lg font-bold'>1. General Provisions</h2>

					<h3 className='text-lg font-semibold'>1.1 Ownership</h3>
					<p>
						This Website is owned and operated by Archibald Whitney.
						The content, including but not limited to articles,
						images, and other materials, is the property of
						Archibald Whitney unless otherwise specified.
					</p>

					<h3 className='text-lg font-semibold'>
						1.2 Age Requirement
					</h3>
					<p>There is no age requirement</p>

					<h2 className='text-lg font-bold'>
						2. User Responsibilities
					</h2>

					<h3 className='text-lg font-semibold'>
						2.1 Acceptable Use
					</h3>
					<p>
						You agree not to use the Website in any way that is
						illegal, harmful, or otherwise objectionable.
					</p>

					<h2 className='text-lg font-bold'>
						3. Intellectual Property
					</h2>

					<h3 className='text-lg font-semibold'>3.1 Copyright</h3>
					<p>
						All content on this Website is copyrighted material of
						Archibald Whitney unless otherwise stated.
					</p>

					<h3 className='text-lg font-semibold'>3.2 Content Usage</h3>
					<p>
						You may not copy, reproduce, or distribute content from
						this Website without explicit permission from the owner.
					</p>

					<h2 className='text-lg font-bold'>4. Liability</h2>

					<h3 className='text-lg font-semibold'>4.1 Disclaimer</h3>
					<p>
						Archibald Whitney is not responsible for any injuries,
						damages, or losses that may occur from the use of
						information or recommendations provided on this Website.
					</p>

					<h3 className='text-lg font-semibold'>
						4.2 Limitation of Liability
					</h3>
					<p>
						Under no circumstances will Archibald Whitney be liable
						for any consequential, incidental, or special damages
						arising from the use of this Website.
					</p>

					<h2 className='text-lg font-bold'>6. Termination</h2>

					<h3 className='text-lg font-semibold'>6.1 Rights</h3>
					<p>
						Archibald Whitney reserves the right to terminate your
						access to the Website for violations of these Terms.
					</p>

					<h3 className='text-lg font-semibold'>6.2 Notice</h3>
					<p>
						You will be provided with notice of termination where
						applicable.
					</p>

					<h2 className='text-lg font-bold'>7. Changes to Terms</h2>

					<p>
						Archibald Whitney reserves the right to update or modify
						these Terms at any time. Changes will be posted on this
						page and your continued use of the Website indicates
						acceptance of the updated Terms.
					</p>

					<h2 className='text-lg font-bold'>
						8. Contact Information
					</h2>
					<p>
						For any queries or concerns regarding these Terms,
						please contact us at{' '}
						<a href='mailto:campingatwild@gmail.com'>
							campingatwild@gmail.com
						</a>
						.
					</p>

					<h2 className='text-lg font-bold'>
						Frequently Asked Questions
					</h2>
					<ul>
						<li>
							<strong>
								What happens if I violate the Terms of Service?
							</strong>
							<ul>
								<li>
									If you violate any of these Terms, your
									access to the Website may be suspended or
									terminated.
								</li>
							</ul>
						</li>
						<li>
							<strong>How often are these Terms updated?</strong>
							<ul>
								<li>
									The Terms are subject to change and any
									updates will be posted on this page.
								</li>
							</ul>
						</li>
						<li>
							<strong>
								Can I use the content from this Website?
							</strong>
							<ul>
								<li>
									The content on this Website is copyrighted
									and cannot be used without explicit
									permission from the owner.
								</li>
							</ul>
						</li>
					</ul>
					<p>
						<strong>Last Updated: August 30, 2023</strong>
					</p>
				</div>
			</div>
		</>
	);
};

export default TermsOfService;
