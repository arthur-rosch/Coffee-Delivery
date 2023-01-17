import { ShoppingCart } from 'phosphor-react'
import { ChangeEvent, useContext, useState } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeesContexts'
import {
  ContainerCoffee,
  ContainerDetails,
  ContainerBuy,
  ContainerTheAmount,
  ContainerButtonCart,
} from './styles'

interface CoffeeProps {
  imgCoffee: string
  typeCoffee: string
  nameCoffee: string
  descriptionCoffee: string
  price: string
}

export function Coffee({
  imgCoffee,
  typeCoffee,
  nameCoffee,
  descriptionCoffee,
  price,
}: CoffeeProps) {
  const [Amount, setAmount] = useState('')
  const { setCoffeeCart } = useContext(CoffeeContext)

  const isButtonCardDisabled = Amount === '0' || Amount === ''

  function handleAmountCoffee(e: ChangeEvent<HTMLInputElement>) {
    setAmount(e.target.value)
  }
  function handleNewCoffeeCart() {
    const newCoffeeCart = {
      Coffee: nameCoffee,
      ImgCoffee: imgCoffee,
      Price: price,
      Amount,
    }
    console.log(newCoffeeCart)
    setCoffeeCart(newCoffeeCart)
  }
  return (
    <ContainerCoffee>
      <ContainerDetails>
        <img src={imgCoffee} alt="" />
        <span>{typeCoffee}</span>
        <h3>{nameCoffee}</h3>
        <p>{descriptionCoffee}</p>
      </ContainerDetails>
      <ContainerBuy>
        <span>
          R$ <strong>{price}</strong>
        </span>
        <ContainerTheAmount>
          <input type="number" min={0} onChange={handleAmountCoffee} />
          <ContainerButtonCart
            onClick={handleNewCoffeeCart}
            disabled={isButtonCardDisabled}
          >
            <ShoppingCart size={22} weight="fill" color="White" />
          </ContainerButtonCart>
        </ContainerTheAmount>
      </ContainerBuy>
    </ContainerCoffee>
  )
}
