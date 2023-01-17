import { createContext, ReactNode, useState } from 'react'

export interface Coffees {
  Coffee: string
  ImgCoffee: string
  Price: number
  Amount: number
}

export interface CoffeeContextType {
  Coffee: Coffees[]
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

  function setCoffeeCart(coffee: Coffees) {
    const newCoffeeCart = {
      Coffee: coffee.Coffee,
      ImgCoffee: coffee.ImgCoffee,
      Price: coffee.Price,
      Amount: coffee.Amount,
    }
    setCoffee((state) => [...state, newCoffeeCart])
  }
  function removeCoffeeCart(coffee: string) {
    setCoffee(Coffee.filter((item) => item.Coffee !== coffee))
  }

  return (
    <CoffeeContext.Provider
      value={{
        Coffee,
        setCoffeeCart,
        removeCoffeeCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}