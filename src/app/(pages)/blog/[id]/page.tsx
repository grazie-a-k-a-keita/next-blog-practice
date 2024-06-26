import SubHeading from "@/app/components/sub-heading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Blog } from "@/types/blog";
import { notFound } from "next/navigation";
const getBlog = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/blog/${id}`, {
    cache: "no-store",
  });
  if (response.status === 404) {
    return notFound();
  }
  return await response.json();
};

const Page = async ({ params }: { params: { id: string } }) => {
  const article: Blog = await getBlog(params.id);

  return (
    <div className="container">
      <SubHeading label="Blog" />
      <div className="border-b mb-4 space-y-3 pb-2">
        <div className="flex mt-6 items-center space-x-4">
          <div className="flex space-x-2">
            <Avatar className="w-4 h-4 border">
              <AvatarImage src="/avatar.png" alt="user-avatar" />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            <p className="text-xs">{article.user}</p>
          </div>
          <p className="text-xs text-muted-foreground">
            {article.updatedAt}に更新
          </p>
        </div>
        <h2 className="text-lg font-medium">{article.title}</h2>
      </div>
      <p>{article.content}</p>
    </div>
  );
};

export default Page;
