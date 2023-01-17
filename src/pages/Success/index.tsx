import { useContext } from 'react'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import Illustration from '../.././assets/Illustration.svg'
import { CoffeeContext } from '../../contexts/CoffeesContexts'
import {
  ContainerSuccess,
  ContainerInformation,
  DeliveryAddress,
  DeliveryTime,
  FormOfPayment,
} from './styles'
export function Success() {
  const { Address } = useContext(CoffeeContext)

  return (
    <ContainerSuccess>
      <ContainerInformation>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <section>
          <DeliveryAddress>
            <div>
              <MapPin size={16} color="#ededed" weight="fill" />
            </div>
            <p>
              Entrega em{' '}
              <strong>
                {Address.map((item) => {
                  return item.Street
                })}{' '}
                -{' '}
              </strong>
              {Address.map((item) => {
                return item.Number
              })}{' '}
              -<br />
              {Address.map((item) => {
                return item.Neighborhood
              })}{' '}
              -
              {Address.map((item) => {
                return item.City
              })}{' '}
              -{' '}
              {Address.map((item) => {
                return item.State
              })}
            </p>
          </DeliveryAddress>
          <DeliveryTime>
            <div>
              <Clock size={16} color="#ededed" weight="fill" />
            </div>
            <p>
              Previsão de entrega <br /> <strong>20 min - 30 min</strong>
            </p>
          </DeliveryTime>
          <FormOfPayment>
            <div>
              <CurrencyDollar size={16} color="#ededed" weight="fill" />
            </div>
            <p>
              Pagamento na entrega <br />{' '}
              {Address.map((item) => {
                return item.Payment.toLowerCase()
              })}
            </p>
          </FormOfPayment>
        </section>
      </ContainerInformation>
      <img src={Illustration} alt="" />
    </ContainerSuccess>
  )
}
