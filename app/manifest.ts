import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Obikels Creations',
		short_name: 'Obikels Creations',
		description: 'Obikels Creations',
		start_url: '/',
		display: 'fullscreen',
		background_color: '#fff',
		theme_color: '#fff',
		icons: [
			{
				src: '/assets/logo_trans.png',
				sizes: 'any',
				type: 'image/png',
			},
		],
	};
}
