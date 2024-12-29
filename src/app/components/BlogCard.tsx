import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ blog }: { blog: { title: string; slug: string; image: string } }) {
  return (
    <div className="border rounded-md p-4 shadow-md hover:shadow-lg transition">
      <Image 
  src={blog.image} 
  alt={blog.title} 
  className="rounded-md mb-4" 
  width={500} // Specify an appropriate width
  height={300} // Specify an appropriate height
/>
      <h3 className="text-xl font-bold text-gray-800">{blog.title}</h3>
      <Link href={`/blog/${blog.slug}`} className="text-blue-500 mt-2 inline-block">
  Read more
</Link>
    </div>
  );
}