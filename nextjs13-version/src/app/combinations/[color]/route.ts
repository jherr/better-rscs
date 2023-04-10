import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  {
    params: { color },
  }: {
    params: {
      color: string;
    };
  }
) {
  const req = await fetch(`http://localhost:3000/${color}.json`);
  return NextResponse.json(await req.json());
}
