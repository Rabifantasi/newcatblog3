import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ blog }: { blog: { title: string; slug: string; image: string } }) {
  return (
    <div className="border rounded-md p-4 shadow-md hover:shadow-lg transition">
      <Image 
        src={blog.image} 
        alt={blog.title} 
        className="rounded-md mb-4" 
        width={500} 
        height={300} 
        sizes="(max-width: 480px) 100vw, 
               (max-width: 640px) 90vw, 
               (max-width: 768px) 80vw, 
               (max-width: 1024px) 70vw, 
               (max-width: 1280px) 60vw, 
               50vw"
      />
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{blog.title}</h3>
      <Link 
        href={`/blog/${blog.slug}`} 
        className="text-blue-500 mt-2 inline-block text-sm sm:text-base"
      >
        Read more
      </Link>
    </div>
  );
}
