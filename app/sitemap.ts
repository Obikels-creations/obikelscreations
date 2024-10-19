import { client } from "@/sanity/lib/client";
import { MetadataRoute } from "next";

async function getAllBlogPost() {
    const query = `*[_type == "post"]{
        slug,
        publisheddatetime
    }`;
    const posts = await client.fetch(query);
    return posts;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const blogPosts = await getAllBlogPost();

    const blogSitemap: MetadataRoute.Sitemap = blogPosts.map((post: {slug: {current: string}; publisheddatetime: string}) => {
        return{
            url: `${process.env.NEXT_PUBLIC_URL}/blog/${post.slug.current}`,
            lastModified: new Date(post.publisheddatetime),
            changeFrequency: 'daily',
            priority: 0.8,
        }
    });
    return[
        {
            url: `${process.env.NEXT_PUBLIC_URL}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        ...blogSitemap,
    ]
}