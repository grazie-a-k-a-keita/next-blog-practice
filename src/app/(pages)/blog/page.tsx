import BlogList from "@/app/components/blog-list";
import SubHeading from "@/app/components/sub-heading";
import Loading from "@/app/loading";
import { Suspense } from "react";

const BlogPage = async () => {
  return (
    <div className="container">
      <SubHeading label="Blog" />
      <Suspense fallback={<Loading />}>
        <BlogList waitTime={1000} />
      </Suspense>
    </div>
  );
};

export default BlogPage;
