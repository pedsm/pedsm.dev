import Link from 'next/link'
export default function TasteBeta() {
	return (
		<section className="main section">
			<div>
				<h3>Join the Beta for Taste on <span className='highlight'>Android!</span></h3>
				<p>To get started with the beta version of the Taste app, follow these steps:</p>
				<ChecklistItem number={1}>
					<Link href="https://groups.google.com/g/taste-beta-testers" target="_blank" rel="noopener noreferrer">
						Join the Google Group: First, click here to join our exclusive beta testing group.
					</Link>
				</ChecklistItem>
				<ChecklistItem number={2}>
					<Link href="https://play.google.com/store/apps/details?id=com.pedsm.taste" target="_blank" rel="noopener noreferrer">
						Download the App:Once you're a member, click
						here
						to download the beta version of the app from the Google Play Store.
					</Link><br />
				</ChecklistItem>
				<p>Thank you for helping us make Taste better! Your feedback is invaluable.</p>
			</div>

		</section>
	)
}

export function ChecklistItem({ number, children }: React.PropsWithChildren<{ number: number }>) {
	return (
		<div style={{display: 'grid', gridTemplateColumns: 'min-content auto', gap: 12, padding: '12px 8px', border: 'solid', borderRadius: 12, borderWidth: 2, borderColor: 'var(--text)', margin: '12px 0'}}>
			<div style={{ flex: 1, fontWeight: 700, fontSize: 36, background: 'var(--heading)', height: 40, width: 40,  textAlign: 'center', color: 'var(--background)', borderRadius: '100%' }}>
				{number}
			</div>
			<div style={{flexGrow: 1}}>
				{children}
			</div>
		</div>
	)
}
