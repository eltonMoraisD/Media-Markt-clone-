import User from "@/models/User"
import { sendEmail } from "@/utils/sendEmails"
import { validateEmail } from "@/utils/validation"
import type { NextResponse, NextRequest } from 'next/server'  // import the types
import { NextResponse as Response } from 'next/server'
import { AccountVerification } from "../../../../../emails/accountVerification"


export async function POST(request: NextRequest): Promise<NextResponse> {
	try {
		const { otp, email } = await request.json()
		if (!validateEmail(email)) {
			return Response.json({ message: "Invalid e-mail" }, { status: 400 })
		}

		const user = await User.findOne({ email })

		// if (user) {
		// 	return Response.json({ message: "This user already exists" }, { status: 400 })
		// }

		sendEmail(email, "", "Estás a un paso de activar tu cuenta en MediaMarkt", AccountVerification, otp)

		return Response.json({
			message:
				"Register sucess!",
		}, { status: 200 })

	} catch (error: any) {
		return Response.json({ message: error.message }, { status: 500 })
	}
}



