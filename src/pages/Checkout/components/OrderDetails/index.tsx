import { useContext } from 'react'
import { CoffeeContext, Coffees } from '../../../../contexts/CoffeesContexts'
import { CardCoffee } from './components/CardCoffee'
import {
  ContainerOrder,
  ContainerOrderDetails,
  ContainerCoffeeList,
  ContainerValueTotal,
  ButtonConfirmOrder,
} from './styles'

export function OrderDetails() {
  const { Coffee } = useContext(CoffeeContext)
  console.log(Coffee)
  return (
    <ContainerOrder>
      <h2>Cafés selecionados</h2>
      <ContainerOrderDetails>
        <ContainerCoffeeList>
          {Coffee.map((item: Coffees) => {
            return (
              <CardCoffee
                key={item.Coffee}
                Coffee={item.Coffee}
                ImgCoffee={item.ImgCoffee}
                Price={item.Price}
                Amount={item.Amount}
              />
            )
          })}
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
