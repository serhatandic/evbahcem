const PrivacyPolicy = () => {
	return (
		<div className='p-12 md:px-36 lg:px-60 xl:px-80'>
			<h1 className='font-extrabold text-2xl'>Privacy Policy</h1>

			<h2 className='font-bold text-lg'>Introduction</h2>
			<p>
				Your privacy is important to us. This privacy policy explains
				what personal data we collect from you and how we use it.
			</p>

			<h2 className='font-bold text-lg'>Information We Collect</h2>
			<p>
				We do not directly collect any personal information from our
				users.
			</p>

			<h2 className='font-bold text-lg'>Third-Party Services</h2>
			<h3 className='font-semibold text-lg'>Google AdSense</h3>
			<p>
				We use Google AdSense to display ads on our website. Google may
				collect information about your device, browsing activity, and
				interactions with ads for the purpose of providing targeted
				advertising.
			</p>
			<p>
				Please refer to{' '}
				<a
					href='https://policies.google.com/technologies/ads'
					target='_blank'
					rel='noopener noreferrer'
				>
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					Google's Privacy Policy
				</a>{' '}
				to understand how Google uses your information.
			</p>

			<h2 className='font-bold text-lg'>Your Rights</h2>
			<p>
				Depending on your jurisdiction, you may have certain rights
				regarding your personal information. Please consult your local
				privacy laws to understand these rights.
			</p>

			<h2 className='font-bold text-lg'>
				Changes to This Privacy Policy
			</h2>
			<p>
				We may update our Privacy Policy from time to time. We will
				notify you of any changes by posting the new Privacy Policy on
				this page.
			</p>

			<h2 className='font-bold text-lg'>Contact Us</h2>
			<p>
				If you have any questions about this Privacy Policy, please
				contact us at{' '}
				<a href='mailto:healthcues.org@gmail.com'>
					healthcues.org@gmail.com
				</a>
				.
			</p>

			<p>Last updated: 23/08/2023</p>
		</div>
	);
};

export default PrivacyPolicy;
