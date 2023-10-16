export const createUserClient = async (gender: string, firstName: string, lastName: string, email: string, nif: string, password: string, role: string) => {
  try {
    console.log("im in helpers")
    const data = await fetch(`${process.env.BASE_URL}/api/auth/signup/userClient`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        gender,
        firstName,
        lastName,
        email,
        nif,
        password,
        role
      })
    })
    return data

  } catch (error: any) {
    // throw new Error(`${error.message}`)
    return error
  }
}

export const createUserCompany = async (gender: string, firstName: string, lastName: string, email: string, companyName: string, cif: string, password: string,role:string) => {
  try {

    const data = await fetch(`${process.env.BASE_URL}/api/auth/signup/userCompany`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        gender,
        firstName,
        lastName,
        email,
        companyName,
        cif,
        password,
        role
      })
    })
    return data

  } catch (error: any) {
    // throw new Error(`${error.message}`)
    return error
  }
}