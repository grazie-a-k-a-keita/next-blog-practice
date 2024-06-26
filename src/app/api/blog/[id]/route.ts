import { NextRequest, NextResponse } from "next/server";
import blogData from "../../../../data/blog-data.json";

const GET = (req: NextRequest, { params }: { params: { id: string } }) => {
  const { id } = params;
  const blog = blogData.find((data) => data.id === id);

  if (!blog) return NextResponse.json({}, { status: 404 });

  return NextResponse.json(blog, { status: 200 });
};

export { GET };
