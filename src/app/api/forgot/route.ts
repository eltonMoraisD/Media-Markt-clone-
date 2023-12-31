import { NextRequest, NextResponse, } from "next/server";
import User from "@/models/User";
import db from "@/utils/db";
import { sendEmail } from "@/utils/sendEmails";
import { createResetToken } from "@/utils/token";
import { validateEmail } from "@/utils/validation";
import resetPasswordTemplate  from "../../../../emails/resetPassword"

export async function POST(req: NextRequest) {
  try {
    await db.connectDb()
    const { email }: { email: string } = await req.json() // this is the way nextjs 13 get the body

    if (!validateEmail(email)) {
      return NextResponse.json({ message: "Invalid email" }, { status: 400 })
    }
    const user = await User.findOne({ email })
    if (!user) {
      return NextResponse.json({ message: "this email does not exists" }, { status: 400 })
    }
    const id: string = user._id.toString()
    const user_id = await createResetToken({
      id
    })

    const url = `${process.env.BASE_URL}/reset/${user_id}`;

    sendEmail(email, url, "Restablecer contraseña", resetPasswordTemplate)
    await db.disconectDb();

    return NextResponse.json({
      message: "An email has been sent to you, use it to reset your password."
    },
      { status: 200 }
    )

  } catch (error: any) {

    return NextResponse.json({
      message: error
    },
      { status: 500 }
    )
  }
}