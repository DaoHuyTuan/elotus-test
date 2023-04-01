type CustomENV = 'development'

const getEnv = (custom?: CustomENV) => {
  if (custom) {
    switch (custom) {
      case 'development':
        return process.env.NEXT_PUBLIC_API_URL
    }
  }
  return process.env.NEXT_PUBLIC_API_URL
}

export const getApiURL = (custom?: CustomENV) => {
  return `${getEnv(custom)}`
}

// export const encodeToken = (token: string) => {
//   return `Bearer ${token}`
// }
