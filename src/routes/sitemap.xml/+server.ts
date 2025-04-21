import { dev } from '$app/environment';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const baseUrl = dev ? 'http://localhost:5173' : 'https://mimmato.vercel.app';

	const pages = [
		'', // homepage
		'about',
        'contact',
        'browser-settings-testNG'
		// Add more routes here
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(path) => `
	<url>
		<loc>${baseUrl}/${path}</loc>
		<changefreq>weekly</changefreq>
		<priority>${path === '' ? '1.0' : '0.7'}</priority>
	</url>`
	)
	.join('')}
</urlset>`.trim();

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
