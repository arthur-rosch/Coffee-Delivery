import bannerCoffee from '../../../.././assets/BannerCoffee.svg'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import {
  ContainerBannerCoffee,
  ContainerInformation,
  ContainerBenefits,
  ContainerCart,
  ContainerPackage,
  ContainerTimer,
  ContainerCoffee,
  ContainerInfo,
} from './styles'
export function BannerCoffee() {
  return (
    <ContainerBannerCoffee>
      <ContainerInformation>
        <h1>
          Encontre o café perfeito <br /> para qualquer hora do dia
        </h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a <br />{' '}
          qualquer hora
        </p>
        <ContainerBenefits>
          <ContainerInfo>
            <ContainerCart>
              <ShoppingCart size={16} weight="fill" />
            </ContainerCart>

            <p>Compra simples e segura</p>

            <ContainerPackage>
              <Package size={16} weight="fill" />
            </ContainerPackage>

            <p>Embalagem mantém o café intacto</p>
          </ContainerInfo>

          <ContainerInfo>
            <ContainerTimer>
              <Timer size={16} weight="fill" />
            </ContainerTimer>

            <p>Entrega rápida e rastreada</p>

            <ContainerCoffee>
              <Coffee size={16} weight="fill" />
            </ContainerCoffee>

            <p>O café chega fresquinho até você</p>
          </ContainerInfo>
        </ContainerBenefits>
      </ContainerInformation>
      <img src={bannerCoffee} alt="" />
    </ContainerBannerCoffee>
  )
}
