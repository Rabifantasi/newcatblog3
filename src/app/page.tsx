import BlogCard from './components/BlogCard';
import { blogs } from '../utils/data';

export default function HomePage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-center mb-8 text-pink-600">
        Welcome to the Cat Blog
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </main>
  );
}
