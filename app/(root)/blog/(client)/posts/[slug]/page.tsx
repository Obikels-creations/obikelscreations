import MaxWidthWrapper from "@/components/layouts/max-width-wrapper";
import { Metadata } from "next";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { client } from '../../../../../../sanity/lib/client';
import { urlFor } from "../../../../../../sanity/lib/image";

/**
 * This function aids the caching of the blog posts
 */
// export async function generateStaticParams({ params }: ISingleBlog) {
//      const posts: IPost[] = await getPost(params.slug);

//      return posts.map(({slug}) => slug)

// }

/**
 * This function is used to dynamically generate metadata for each blog post
 */
export async function generateMetadata({
     params: {slug},
     }: ISingleBlog ): Promise<Metadata> {
          const blogPost: IPost = await getPost(slug);
     
          return {
               title: blogPost.title,
               description: blogPost.excerpt,
               // openGraph: {
               //      title: blogPost.title,
               //      description: blogPost.excerpt,
               //      url: `https://www.obikelscreations.co.uk/blog/${slug}`,
               //      siteName: 'Obikels Creations',
               //      images: [
               //           {
               //                url: blogPost.overviewImage,
               //                width: 800,
               //                height: 600,
               //                alt: blogPost.title
               //           }
               //      ]
               // }
          }
}

async function getPost(slug: string) {
     const query = `*[_type == "post" && slug.current== "${slug}"][0]{
  title,
  slug,
  publisheddatetime,
  excerpt,
  overviewImage,
  body,
  tag[]->{
    name,
    _id,
    slug
  }
}`;
     const post = await client.fetch(query);
     return post;
}
const SinglePage = async ({ params }: ISingleBlog) => {
     const PortableTextComponent = {
          types: {
               image: ({ value }: any) => (
                    <Image
                         className="my-[30px] rounded-md"
                         src={urlFor(value).url()}
                         height="1000"
                         width="1000"
                         alt="postimage"
                    />
               ),
          },
     };
     const post: IPost = await getPost(params.slug);
     return (
          <MaxWidthWrapper className="mt-14 mb-12">
          <div className="mx-auto max-w-4xl p-[20px]">
               <h3 className="pb-[20px] text-center text-[27px] font-bold">
                    {post.title}
               </h3>
               <hr />
               <div className="p-[10px]">
                    <p className="text-[13px]">
                    Published on:{" "}
                         {new Date(post.publisheddatetime).toDateString()}{" "}
                    </p>
                    <Image
                         src={urlFor(post.overviewImage).url()}
                         alt={post.slug.current}
                         width="1000"
                         height="1000"
                         className="mx-auto hidden md:inline mb-[10px] mt-[20px] h-[350px] w-full rounded-md object-cover blur-sm"
                    />
                    <div className="relative z-10 mx-auto mt-[0px] md:-mt-[200px] md:w-[93%] rounded-md bg-white md:px-[20px] py-[10px]">
                         <div className="pt-[10px] prose-ol:list-decimal prose-ul:list-disc prose-headings:my-[10px] prose-headings:font-bold prose-h1:text-[50px] prose-h2:text-[40px] prose-h3:text-[30px] prose-h4:text-[20px] prose-h5:text-[15px] prose-h6:text-[13px] prose-p:text-[17px] prose-a:text-blue-800 prose-blockquote:border-l-4 prose-blockquote:border-[#333333] prose-blockquote:pl-[10px] prose-code:rounded-sm prose-code:bg-[#333333] prose-code:p-[10px] prose-code:text-[14px] prose-code:leading-10 prose-code:text-white prose-li:ml-[25px]">
                              <PortableText
                                   value={post.body}
                                   components={PortableTextComponent}
                              />
                         </div>
                         <div className="my-5 flex cursor-default flex-wrap gap-2 text-[9px] font-bold">
                              {post?.tag?.map((tag) => (
                                   <span
                                        className="rounded-full bg-primary px-[11px] py-[7px] text-white"
                                        key={tag._id}
                                   >
                                        {tag.name.toLowerCase()}
                                   </span>
                              ))}
                         </div>
                    </div>
               </div>

          </div>
          </MaxWidthWrapper>
     );
};

export default SinglePage;
