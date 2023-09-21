export const resetPassword = async (token: string, password: string): Promise<Response> => {
  try {
    const data = await fetch(`${process.env.BASE_URL}/api/reset`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token,
        password
      })
    })
    return data
  } catch (error: any) {
    throw new Error(error)
  }
}