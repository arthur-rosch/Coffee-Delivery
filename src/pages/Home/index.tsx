import { BannerCoffee } from './components/bannerCoffee'
import { ContainerHome, ContainerCoffees } from './styles'
import { Coffee } from './components/Coffee'
export function Home() {
  return (
    <ContainerHome>
      <BannerCoffee />
      <ContainerCoffees>
        <Coffee></Coffee>
      </ContainerCoffees>
    </ContainerHome>
  )
}
