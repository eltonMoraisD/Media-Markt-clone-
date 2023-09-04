import { NextResponse } from "next/server";
import {connectDb} from '../../../utils/db'

export function GET() {
  // connectDb();
  return NextResponse.json({ name: "John Doe" });
}
