const Page = async ({ params }) => {
    const { blogId } = params;
  
    // Fetch the blog post data
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`);
    const post = await res.json();
  
    if (!post) {
      return <div>Post not found</div>;
    }
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  };
  
  export default Page;
  