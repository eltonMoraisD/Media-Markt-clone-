import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from "next/server";
import db from "@/utils/db";
import { verifyJwtToken } from "@/utils/token";
import User from "@/models/User";

interface IPayload {
  token: string,
  password: string
}

export async function PUT(req: NextRequest, res: NextResponse) {
  try {
    await db.connectDb()
    const { token, password }: IPayload = await req.json()
    const decoded = await verifyJwtToken(token) as { id: string }

    const user = await User.findById(decoded.id)

    if (!user) {
      NextResponse.json({ message: "This Account does not exist." }, { status: 404 })
    }

    const cryptedPassword = await bcrypt.hash(password, 12)
    await User.updateOne({
      password: cryptedPassword
    })
    await db.disconectDb()

    return NextResponse.json({ email: user.email }, { status: 200 })
  } catch (error: any) {
    NextResponse.json({ message: error })
  }
}