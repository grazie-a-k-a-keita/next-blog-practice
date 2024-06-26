import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Blog } from "@/types/blog";
import Link from "next/link";

const getBlogs = async (waitTime: number) => {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, waitTime));

  const response = await fetch("http://localhost:3000/api/blog", {
    cache: "no-store",
  });
  return await response.json();
};

const BlogList = async ({ waitTime }: { waitTime: number }) => {
  const blogs = await getBlogs(waitTime);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
      {blogs.map((blog: Blog) => (
        <div
          className="relative border rounded-md p-4 hover:shadow-md transition duration-500 flex flex-col"
          key={blog.id}
        >
          <Link href={`/blog/${blog.id}`}>
            <span className="absolute inset-0"></span>
            <h2 className="font-medium">{blog.title}</h2>
          </Link>
          <div className="flex-1" />
          <div className="flex mt-3 space-x-1">
            <Avatar className="w-4 h-4 border">
              <AvatarImage src="/avatar.png" alt="user-avatar" />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            <p className="text-xs">{blog.user}</p>
            <p className="text-xs text-muted-foreground pl-2">
              {blog.updatedAt}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
