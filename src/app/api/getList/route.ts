import {  NextResponse } from "next/server";
import { pinata } from "@/utils/config"



export async function GET() {
  try {
    const res = await pinata.files.list();
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ text: "Error creating API Key:" }, { status: 500 });
  }
}
