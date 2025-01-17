import { NextResponse } from "next/server";

export async function POST(request, ...args) {
  const data = await request.json();
  const email = data.email;
  const password = data.password;

  if (email === "t@t.com" && password === "t1234")
    return NextResponse.json(true);

  return NextResponse.json(false);
}
