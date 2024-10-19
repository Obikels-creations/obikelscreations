import { MetadataRoute } from 'next'


export default function robots(): MetadataRoute.Robots {
 return {
    rules: [
        {
            userAgent: '*',
            allow: '/',
            disallow: ['/privacy-policy']
        }
    ],
    sitemap: `${process.env.NEXT_PUBLIC_URL}/sitemap.xml`
 }
}