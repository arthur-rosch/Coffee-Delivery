import { CardCoffee } from './components/CardCoffee'
import {
  ContainerOrder,
  ContainerOrderDetails,
  ContainerCoffeeList,
  ContainerValueTotal,
  ButtonConfirmOrder,
} from './styles'

export function OrderDetails() {
  return (
    <ContainerOrder>
      <h2>Cafés selecionados</h2>
      <ContainerOrderDetails>
        <ContainerCoffeeList>
          <CardCoffee></CardCoffee>
          <CardCoffee></CardCoffee>
        </ContainerCoffeeList>
        <ContainerValueTotal>
          <div>
            <p>Total de item</p>
            <p>R$ 10,50</p>
          </div>
          <div>
            <p>Taxa de entrega</p>
            <p>R$ 3,50</p>
          </div>
          <div>
            <strong>Total</strong>
            <strong>R$ 33,50</strong>
          </div>
        </ContainerValueTotal>
        <ButtonConfirmOrder type="button">Confinar Pedido</ButtonConfirmOrder>
      </ContainerOrderDetails>
    </ContainerOrder>
  )
}
