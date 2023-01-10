import { ShoppingCart } from 'phosphor-react'
import {
  ContainerCoffee,
  ContainerDetails,
  ContainerPrice,
  ContainerTheAmount,
  ContainerButtonCart,
} from './styles'
export function Coffee() {
  return (
    <ContainerCoffee>
      <ContainerDetails>
        <img src="" alt="" />
        <span>Tradicional</span>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </ContainerDetails>
      <ContainerPrice>
        <span>
          r$ <strong>9,90</strong>
        </span>
        <ContainerTheAmount>
          <input type="number" min={0} />
          <ContainerButtonCart>
            <ShoppingCart size={16} />
          </ContainerButtonCart>
        </ContainerTheAmount>
      </ContainerPrice>
    </ContainerCoffee>
  )
}
