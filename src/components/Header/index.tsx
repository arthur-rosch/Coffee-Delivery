import logo from '../.././assets/CoffeeDeliveryLogo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  ButtonCart,
  ButtonLocation,
  ContainerCartAndLocation,
  ContainerHeader,
} from './styles'

export function Header() {
  return (
    <ContainerHeader>
      <img src={logo} alt="" />
      <ContainerCartAndLocation>
        <ButtonLocation>
          <MapPin size={22} />
          <span>Porto Alegre,RS</span>
        </ButtonLocation>
        <ButtonCart>
          <ShoppingCart size={22} />
        </ButtonCart>
      </ContainerCartAndLocation>
    </ContainerHeader>
  )
}
