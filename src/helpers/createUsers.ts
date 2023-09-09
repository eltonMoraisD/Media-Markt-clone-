
export const createUser = async (firstName: string, lastName: string, email: string, password: string) => {
  try {
    const data = fetch("http://localhost:3000/api/auth/signup", {
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

  } catch (error) {
    return error
  }
}