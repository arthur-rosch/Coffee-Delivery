import { ShoppingCart } from 'phosphor-react'
import Coffees from '../../../.././assets/Coffees/Coffee.svg'
import {
  ContainerCoffee,
  ContainerDetails,
  ContainerBuy,
  ContainerTheAmount,
  ContainerButtonCart,
} from './styles'
export function Coffee() {
  return (
    <ContainerCoffee>
      <ContainerDetails>
        <img src={Coffees} alt="" />
        <span>Tradicional</span>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </ContainerDetails>
      <ContainerBuy>
        <span>
          R$ <strong>9,90</strong>
        </span>
        <ContainerTheAmount>
          <input type="number" min={0} />
          <ContainerButtonCart>
            <ShoppingCart size={22} weight="fill" color="White" />
          </ContainerButtonCart>
        </ContainerTheAmount>
      </ContainerBuy>
    </ContainerCoffee>
  )
}
