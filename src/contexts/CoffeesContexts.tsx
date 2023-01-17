import { createContext, ReactNode, useState } from 'react'

export interface Coffees {
  Coffee?: string
  ImgCoffee?: string
  TypeCoffee?: string
  DescriptionCoffee?: string
  Price: number
  Amount?: number | string
}

export interface Address {
  ZipCode: string
  Street: string
  Number: string
  Complement: string | undefined
  Neighborhood: string
  City: string
  State: string
  Payment: string
}

export interface CoffeeContextType {
  Coffee: Coffees[]
  createNewAddress: (address: Address) => void
  setCoffeeCart: (coffee: Coffees) => void
  removeCoffeeCart: (coffee: string) => void
}

interface CoffeeContextProviderProps {
  children: ReactNode
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [Coffee, setCoffee] = useState<Coffees[]>([])
  const [Address, setAddress] = useState<Address[]>([])

  function setCoffeeCart(coffee: Coffees) {
    const coffeeCart = {
      Coffee: coffee.Coffee,
      ImgCoffee: coffee.ImgCoffee,
      Price: coffee.Price,
      Amount: coffee.Amount,
    }
    setCoffee((state) => [...state, coffeeCart])
  }
  function createNewAddress(address: Address) {
    setAddress((state) => [...state, address])
  }
  function removeCoffeeCart(coffee: string) {
    setCoffee(Coffee.filter((item) => item.Coffee !== coffee))
  }

  return (
    <CoffeeContext.Provider
      value={{
        Coffee,
        createNewAddress,
        setCoffeeCart,
        removeCoffeeCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
