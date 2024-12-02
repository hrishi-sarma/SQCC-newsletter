import { useRouter } from 'next/router';
import { blogData } from '@/app/dashboard/data/blogdata';

const BlogPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const blog = blogData.find((b) => b.id.toString() === id);

  if (!blog) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-semibold text-center text-white">Blog not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-black p-8 h-full text-white">
      <h1 className="text-5xl text-center mb-6">{blog.title}</h1>
      <div className="prose max-w-none">
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogPage;
