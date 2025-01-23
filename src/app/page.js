import Link from 'next/link';

const Page = async () => {
  // Fetch data
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <ul>
        {posts.map((post) => {
          // Ensure valid data before rendering
          if (!post.id || !post.title) {
            return null; // Skip rendering invalid posts
          }
          return (
            <li key={post.id} className="mb-2">
              <Link href={`/${post.id}`} className="text-blue-500 hover:underline">
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;
