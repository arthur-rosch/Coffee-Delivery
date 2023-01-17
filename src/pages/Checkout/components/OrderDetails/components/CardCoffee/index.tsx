import {
  ContainerCardCoffee,
  ContainerInformation,
  NameCoffee,
  AmountCoffee,
  ButtonRemoveCoffee,
} from './styles'

import { Coffees } from '../../../../../../contexts/CoffeesContexts'

export function CardCoffee({ ImgCoffee, Coffee, Amount, Price }: Coffees) {
  return (
    <ContainerCardCoffee>
      <img src={ImgCoffee} alt="" width={64} height={64} />
      <ContainerInformation>
        <NameCoffee>{Coffee}</NameCoffee>
        <div>
          <AmountCoffee type="number" value={Amount} />
          <ButtonRemoveCoffee>Remover</ButtonRemoveCoffee>
        </div>
      </ContainerInformation>
      <p>{Price}</p>
    </ContainerCardCoffee>
  )
}
