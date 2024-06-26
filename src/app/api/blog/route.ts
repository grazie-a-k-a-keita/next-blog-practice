import { NextResponse } from "next/server";
import blogData from "../../../data/blog-data.json";

const GET = () => {
  return NextResponse.json(blogData, { status: 200 });
};

export { GET };
