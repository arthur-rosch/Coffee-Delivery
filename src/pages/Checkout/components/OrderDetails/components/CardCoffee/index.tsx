import {
  ContainerCardCoffee,
  ContainerInformation,
  NameCoffee,
  AmountCoffee,
  ButtonRemoveCoffee,
} from './styles'
import { Trash } from 'phosphor-react'
import {
  CoffeeContext,
  Coffees,
} from '../../../../../../contexts/CoffeesContexts'
import { useContext } from 'react'

export function CardCoffee({ ImgCoffee, Coffee, Amount, Price }: Coffees) {
  const { removeCoffeeCart } = useContext(CoffeeContext)
  function handleRemoveCoffeeCart() {
    removeCoffeeCart(Coffee)
  }
  return (
    <ContainerCardCoffee>
      <img src={ImgCoffee} alt="" width={64} height={64} />
      <ContainerInformation>
        <NameCoffee>{Coffee}</NameCoffee>
        <div>
          <AmountCoffee type="number" min={1} value={Amount} />
          <ButtonRemoveCoffee onClick={handleRemoveCoffeeCart}>
            <Trash size={16} color="#8047F8" />
            Remover
          </ButtonRemoveCoffee>
        </div>
      </ContainerInformation>
      <p>R$ {Price}</p>
    </ContainerCardCoffee>
  )
}
