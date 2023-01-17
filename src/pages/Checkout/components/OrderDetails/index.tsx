import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
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

  let totalPriceCoffees = 0
  Coffee.map((item) => {
    totalPriceCoffees = Math.floor(
      Number(totalPriceCoffees + item.Amount * item.Price),
    )
  })

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
            <p>R$ {totalPriceCoffees}</p>
          </div>
          <div>
            <p>Taxa de entrega</p>
            <p>R$ 3.50</p>
          </div>
          <div>
            <strong>Total</strong>
            <strong>R$ {totalPriceCoffees + 3.5}</strong>
          </div>
        </ContainerValueTotal>
        <NavLink to={'/Success'}>
          <ButtonConfirmOrder type="button">Confinar Pedido</ButtonConfirmOrder>
        </NavLink>
      </ContainerOrderDetails>
    </ContainerOrder>
  )
}
