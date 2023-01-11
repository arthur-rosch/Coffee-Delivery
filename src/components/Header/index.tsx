import logo from '../.././assets/CoffeeDeliveryLogo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  ButtonCart,
  ButtonLocation,
  ContainerCartAndLocation,
  ContainerHeader,
} from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <ContainerHeader>
      <img src={logo} alt="" />
      <ContainerCartAndLocation>
        <ButtonLocation>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre,RS</span>
        </ButtonLocation>
        <ButtonCart>
          <NavLink to={'/checkout'}>
            <ShoppingCart size={22} color="#DBAC2C" weight="fill" />
          </NavLink>
        </ButtonCart>
      </ContainerCartAndLocation>
    </ContainerHeader>
  )
}
