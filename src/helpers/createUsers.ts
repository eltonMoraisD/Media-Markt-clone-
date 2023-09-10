export const createUser = async (firstName: string, lastName: string, email: string, password: string) => {
  try {

    const data = await fetch(`${process.env.BASE_URL}/api/auth/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password
      })
    })
    return data

  } catch (error: any) {
    // throw new Error(`${error.message}`)
    return error
  }
}