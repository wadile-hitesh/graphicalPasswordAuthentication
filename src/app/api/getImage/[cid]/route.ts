import { NextRequest, NextResponse } from 'next/server';
import { pinata } from '@/utils/config';
export async function GET(req: NextRequest, { params }: { params: { cid: string } }) {
  try {
    const { cid } = params; // Extract cid from params
    console.log(cid);
    
    const res = await pinata.gateways.createSignedURL({
      cid : cid,
      expires : 120
    });
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ text: "Error fetching data" }, { status: 500 });
  }
}