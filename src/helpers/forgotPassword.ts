export const forgotPassword = async (email: string): Promise<Response> => {

  try {
    const data = await fetch(`${process.env.BASE_URL}/api/forgot`, {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    })
    return data
  } catch (error: any) {
    throw new Error(error)
  }


}