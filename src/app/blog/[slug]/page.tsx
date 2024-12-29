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
    <article className="max-w-[calc(100%-600px)] mx-auto py-8 px-4 flex flex-col items-left">
      <h1 className="text-3xl font-bold text-teal-600 text-center">{blog.title}</h1>
      <p className="text-gray-600 mt-2 text-center">{blog.date}</p>
      <div className="mt-4">
        <Image 
          src={blog.image} 
          alt={blog.title} 
          className="rounded-md mx-auto" 
          width={600} // Adjust width according to your layout
          height={400} // Adjust height according to your layout
        />
      </div>
<b>      <p className="mt-6  text-lg leading-relaxed text-justify ">{blog.content}</p></b>
      <p className="mt-6  text-lg leading-relaxed text-justify ">{blog.content1}</p>
     <b> <p className="mt-6  text-lg leading-relaxed text-justify ">{blog.content2}</p></b>
      <p className="mt-6  text-lg leading-relaxed text-justify ">{blog.content3}</p>
      <b><p className="mt-6  text-lg leading-relaxed text-justify ">{blog.content4}</p></b>
      <p className="mt-6  text-lg leading-relaxed text-justify ">{blog.content5}</p>
      <b><p className="mt-6  text-lg leading-relaxed text-justify ">{blog.content6}</p></b>
      <p className="mt-6  text-lg leading-relaxed text-justify ">{blog.content7}</p>
      <b><p className="mt-6  text-lg leading-relaxed text-justify ">{blog.content8}</p></b>
      <p className="mt-6  text-lg leading-relaxed text-justify ">{blog.content9}</p>
      <b><p className="mt-6  text-lg leading-relaxed text-justify ">{blog.content10}</p></b>
      <p className="mt-6  text-lg leading-relaxed text-justify ">{blog.content11}</p>
      <b><p className="mt-6  text-lg leading-relaxed text-justify ">{blog.content12}</p></b>
      <p className="mt-6  text-lg leading-relaxed text-justify ">{blog.content13}</p>
      <b><p className="mt-6  text-lg leading-relaxed text-justify ">{blog.content14}</p></b>
      <p className="mt-6  text-lg leading-relaxed text-justify ">{blog.content15}</p>
      <b><p className="mt-6  text-lg leading-relaxed text-justify ">{blog.content16}</p></b>
      <p className="mt-6  text-lg leading-relaxed text-justify ">{blog.content17}</p>

      <CommentSection slug={blog.slug} />
    </article>
  );
}
