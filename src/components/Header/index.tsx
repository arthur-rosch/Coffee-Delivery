import logo from '../.././assets/CoffeeDeliveryLogo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  ButtonCart,
  ButtonLocation,
  ContainerCartAndLocation,
  ContainerHeader,
} from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeesContexts'

export function Header() {
  const { Coffee } = useContext(CoffeeContext)
  return (
    <ContainerHeader>
      <NavLink to={'/'}>
        <img src={logo} alt="" />
      </NavLink>
      <ContainerCartAndLocation>
        <ButtonLocation>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre,RS</span>
        </ButtonLocation>
        <ButtonCart>
          <div>{Coffee.length}</div>
          <NavLink to={'/checkout'}>
            <ShoppingCart size={22} color="#DBAC2C" weight="fill" />
          </NavLink>
        </ButtonCart>
      </ContainerCartAndLocation>
    </ContainerHeader>
  )
}
