import Link from 'next/link'
export default function TasteBeta() {
	return (
		<section className="main section">
			<div>
				<h3>Join the Beta for Taste on Android!</h3>
				<p>To get started with the beta version of the Taste app, follow these steps:</p>
				<ol>
					<li>
						<strong>Join the Google Group:</strong> First, click{' '}
						<Link href="https://groups.google.com/g/taste-beta-testers" target="_blank" rel="noopener noreferrer">
							here
						</Link>{' '}
						to join our exclusive beta testing group.
					</li>
					<li>
						<strong>Download the App:</strong> Once you're a member, click{' '}
						<Link href="https://play.google.com/store/apps/details?id=com.pedsm.taste" target="_blank" rel="noopener noreferrer">
							here
						</Link>{' '}
						to download the beta version of the app from the Google Play Store.
					</li>
				</ol>
				<p>Thank you for helping us make Taste better! Your feedback is invaluable.</p>
			</div>

		</section>
	)

}