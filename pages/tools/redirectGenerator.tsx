import { useState } from "react";

export default function RedirectGenerator() {
    const [url, setUrl] = useState('');
    const redirectUrl = `https://pedsm.dev/tools/redirect?url=${encodeURIComponent(url)}`;
    return <section className="main section">
        <h1>Redirect Generator</h1>
        <p>Enter the URL you want to redirect to:</p>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />

        <p>Copy the following code and paste it into your HTML:</p>
        <div style={{display: 'flex', gap: '8px', width: '100%'}}>
            <input value={redirectUrl} readOnly className="input" />
            <button onClick={() => navigator.clipboard.writeText(redirectUrl)}>Copy</button>
        </div>
    </section>
}