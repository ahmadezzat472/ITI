export type user =   {
    id: number,
    name: string,
    email: string,
    address: addressType,
    phone: string
  }

  type addressType = {
    street: string,
    city: string
  }
