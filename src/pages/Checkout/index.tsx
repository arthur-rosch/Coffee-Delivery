import { FormCheckout } from './components/FormCheckout'
import { OrderDetails } from './components/OrderDetails'
import { ContainerCheckout } from './styles'

export function Checkout() {
  return (
    <ContainerCheckout>
      <FormCheckout></FormCheckout>
      <OrderDetails></OrderDetails>
    </ContainerCheckout>
  )
}
