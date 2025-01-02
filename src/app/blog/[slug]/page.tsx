import { blogs } from '../../../utils/data';
import CommentSection from '../../components/CommentSection';
import Image from 'next/image';

interface BlogPostProps {
  params: { slug: string };
}

export default function BlogPost({ params }: BlogPostProps) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return <p className="text-center text-red-500">Blog not found.</p>;
  }

  return (
    <article className="max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] xl:max-w-[70%] 2xl:max-w-[65%] custom:max-w-[60%] mx-auto py-8 px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-teal-600 text-center">
        {blog.title}
      </h1>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mt-2 text-center">
        {blog.date}
      </p>
      <div className="mt-6">
        <Image 
          src={blog.image} 
          alt={blog.title} 
          className="rounded-md mx-auto" 
          width={800} 
          height={500} 
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, (max-width: 1280px) 60vw, 50vw"
        />
      </div>
      <div className="mt-6 space-y-6">
        {[blog.content, blog.content1, blog.content2, blog.content3, blog.content4, blog.content5, blog.content6, blog.content7, blog.content8, blog.content9, blog.content10, blog.content11, blog.content12, blog.content13, blog.content14, blog.content15, blog.content16, blog.content17]
          .filter(Boolean)
          .map((content, index) => (
            <p 
              key={index} 
              className={`text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-justify ${index % 2 === 0 ? 'font-bold' : ''}`}
            >
              {content}
            </p>
          ))}
      </div>
      <CommentSection slug={blog.slug} />
    </article>
  );
}
