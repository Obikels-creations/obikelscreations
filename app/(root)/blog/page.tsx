import { Metadata } from 'next';
import Image from "next/image";
import BlogCard from "../../../components/pages/blog/blog-card";
import { client } from "../../../sanity/lib/client";
import MaxWidthWrapper from '@/components/layouts/max-width-wrapper';


export const metadata: Metadata = {
	title:{
		absolute:  'Blog | Latest Insight',
	},
	description: 'Stay in the loop with the latest happenings in Obikels Creations!',
	metadataBase: new URL('https://www.obikelscreations.co.uk/blog'),
	alternates:{
	  canonical: '/blog',
	  languages: {
		'en-US':'/en-US',
		'de-DE': '/de-DE',
	  },
	},
	openGraph: {
	  title: {
		absolute: 'Blog',
	  },
	  description: 'Stay in the loop with the latest happenings in Obikels Creations!',
	  url: 'https://www.obikelscreations.co.uk/blog',
	  siteName: 'Obikels Creations',
	  images: '/IMG-20190619-WA0005.jpg'
	}
}

// Function to fetch a specific post by slug
async function getPost() {
     const query = `*[_type == "post"]{
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
     const data = await client.fetch(query);
     return data;
}



// Define revalidate period
export const revalidate = 60;

export default async function Blog() {
     // Fetch all posts or adjust if needed
     const posts: IPost[] = await getPost();
     return (
          <MaxWidthWrapper className='my-12'>
          <div className="mx-auto  p-[20px]">
               <h1 className="text-2xl pt-3 font-bold">The Obikels Creations Time Square</h1>
               <p>
                    Let's keep you <u className="font-bold">Up-To-Date</u>
               </p>

               <div className="mt-[20px] flex w-full flex-col flex-wrap justify-center gap-3 pb-[30px] md:flex-row">
                    {posts?.length > 0 ? (
                         posts.map((post, k) => (
                              <BlogCard key={k} post={post} />
                         ))
                    ) : (
                         <div className="mx-auto w-[70%] md:w-[20%] lg:w-[30%]">
                              <Image
                                   className="mx-auto mt-[20px]"
                                   src="/cotton-yarn.jpg"
                                   alt="Obikels Creations || No Blog Post Found"
                                   height="100"
                                   width="1000"
                              />
                         </div>
                    )}
               </div>
          </div>
          </MaxWidthWrapper>
     );
}


