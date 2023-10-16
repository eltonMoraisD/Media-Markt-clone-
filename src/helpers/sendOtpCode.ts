export const sendOtpCode = async (otp:any,email: string) => {
  try {
    const data = await fetch(`${process.env.BASE_URL}/api/auth/otpCode`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        otp,
        email,
      })
    })
    return data

  } catch (error: any) {
    // throw new Error(`${error.message}`)
    return error
  }

}