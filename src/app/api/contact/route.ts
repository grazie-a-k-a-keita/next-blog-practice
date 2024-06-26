import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

const POST = async (req: NextApiRequest) => {
  const { content } = req.body;
  console.log(content);
  return NextResponse.json({}, { status: 200 });
};

export { POST };
