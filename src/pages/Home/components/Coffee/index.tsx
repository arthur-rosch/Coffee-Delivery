import { ShoppingCart } from 'phosphor-react'
import { ChangeEvent, useContext, useState } from 'react'
import { CoffeeContext, Coffees } from '../../../../contexts/CoffeesContexts'
import {
  ContainerCoffee,
  ContainerDetails,
  ContainerBuy,
  ContainerTheAmount,
  ContainerButtonCart,
} from './styles'

export function Coffee({
  ImgCoffee,
  TypeCoffee,
  Coffee,
  DescriptionCoffee,
  Price,
}: Coffees) {
  const [Amount, setAmount] = useState('')
  const { setCoffeeCart } = useContext(CoffeeContext)

  const isButtonCardDisabled = Amount === '0' || Amount === ''

  function handleAmountCoffee(e: ChangeEvent<HTMLInputElement>) {
    setAmount(e.target.value)
  }
  function handleNewCoffeeCart() {
    const newCoffeeCart = {
      Coffee,
      ImgCoffee,
      Price,
      Amount,
    }
    setCoffeeCart(newCoffeeCart)
  }
  return (
    <ContainerCoffee>
      <ContainerDetails>
        <img src={ImgCoffee} alt="" />
        <span>{TypeCoffee}</span>
        <h3>{Coffee}</h3>
        <p>{DescriptionCoffee}</p>
      </ContainerDetails>
      <ContainerBuy>
        <span>
          R$ <strong>{Price}</strong>
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
