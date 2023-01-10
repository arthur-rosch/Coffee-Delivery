import { BannerCoffee } from './components/bannerCoffee'
import { ContainerHome, ContainerCoffees } from './styles'
import { Coffee } from './components/Coffee'
export function Home() {
  return (
    <ContainerHome>
      <BannerCoffee />
      <h1>Nossos cafés</h1>
      <ContainerCoffees>
        <Coffee></Coffee>
        <Coffee></Coffee>
        <Coffee></Coffee>
        <Coffee></Coffee>
        <Coffee></Coffee>
        <Coffee></Coffee>
        <Coffee></Coffee>
        <Coffee></Coffee>
        <Coffee></Coffee>
      </ContainerCoffees>
    </ContainerHome>
  )
}
