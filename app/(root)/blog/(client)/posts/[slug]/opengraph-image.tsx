import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Obikels Creations Blog Timeline'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image({ params }: { params: { slug: string } }) {
  const post = await fetch(`https://.../posts/${params.slug}`).then((res) =>
    res.json()
  )

  
}