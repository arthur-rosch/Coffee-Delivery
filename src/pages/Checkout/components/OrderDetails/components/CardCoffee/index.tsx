import {
  ContainerCardCoffee,
  ContainerInformation,
  NameCoffee,
  AmountCoffee,
  ButtonRemoveCoffee,
} from './styles'
import Coffee from '../../../../../.././assets/Coffees/Coffee.svg'
export function CardCoffee() {
  return (
    <ContainerCardCoffee>
      <img src={Coffee} alt="" width={64} height={64} />
      <ContainerInformation>
        <NameCoffee>Expresso Tradicional</NameCoffee>
        <div>
          <AmountCoffee type="number" name="" id="" />
          <ButtonRemoveCoffee>Remover</ButtonRemoveCoffee>
        </div>
      </ContainerInformation>
      <p>R$9,90</p>
    </ContainerCardCoffee>
  )
}
