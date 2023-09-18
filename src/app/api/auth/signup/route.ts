import type { NextResponse, NextRequest } from 'next/server'  // import the types
import { NextResponse as Response } from 'next/server'
import bcrypt from "bcrypt"

import db from '../../../../utils/db'
import { validateEmail } from '@/utils/validation';
import User from '@/models/User';
import { sendEmail } from "../../../../utils/sendEmails"
import { wellcomeTemplate } from "@/EmailTemplate/wellcome";

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;

}

//Create user 
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    await db.connectDb()
    const { firstName, lastName, email, password }: IUser = await request.json()

    if (!firstName || !lastName || !email || !password) {
      return Response.json({
        message: "Please fill all fields"
      }, {
        status: 400
      })
    }

    if (!validateEmail(email)) {
      return Response.json({ message: "Invalid e-mail" }, { status: 400 })
    }

    const user = await User.findOne({ email })

    if (user) {
      return Response.json({ message: "This user already exists" }, { status: 400 })
    }

    if (password.length < 6) {
      return Response
        .json({ message: "Password must have at least 6 characters!" }, { status: 400 });
    }

    const cryptedPassword = await bcrypt.hash(password, 10)

    const newUser = new User({ firstName, lastName, email, password: cryptedPassword })

    await User.create(newUser)

    //send confirmation email 
    sendEmail(email, "", "Confirmation du compte client", wellcomeTemplate)

    await db.disconectDb();

    return Response.json({
      message:
        "Register sucess!",
    }, { status: 200 })

  } catch (error: any) {
    return Response.json({ message: error.message }, { status: 500 })
  }
}



