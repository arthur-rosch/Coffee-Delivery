import { BannerCoffee } from './components/bannerCoffee'
import { ContainerHome, ContainerCoffees } from './styles'
import { Coffee } from './components/Coffee'
import Coffee1 from '../.././assets/Coffees/Coffee.svg'
import Coffee2 from '../.././assets/Coffees/Coffee1.svg'
import Coffee3 from '../.././assets/Coffees/Coffee2.svg'
import Coffee4 from '../.././assets/Coffees/Coffee3.svg'
import Coffee5 from '../.././assets/Coffees/Coffee4.svg'
import Coffee6 from '../.././assets/Coffees/Coffee5.svg'
import Coffee7 from '../.././assets/Coffees/Coffee6.svg'
import Coffee8 from '../.././assets/Coffees/Coffee7.svg'
import Coffee9 from '../.././assets/Coffees/Coffee8.svg'
import Coffee10 from '../.././assets/Coffees/Coffee9.svg'
import Coffee11 from '../.././assets/Coffees/Coffee10.svg'
import Coffee12 from '../.././assets/Coffees/Coffee11.svg'
import Coffee13 from '../.././assets/Coffees/Coffee12.svg'
export function Home() {
  const coffees = [
    {
      id: 1,
      ImgCoffee: Coffee1,
      TypeCoffee: 'Tradicional',
      NameCoffee: 'Expresso Tradicional',
      DescriptionCoffee:
        'O tradicional café feito com água quente e grãos moídos',
      Price: '9.90',
    },
    {
      id: 2,
      ImgCoffee: Coffee2,
      TypeCoffee: 'Tradicional',
      NameCoffee: 'Expresso Americano',
      DescriptionCoffee: 'Expresso diluído, menos intenso que o tradicional',
      Price: '9.90',
    },
    {
      id: 3,
      ImgCoffee: Coffee3,
      TypeCoffee: 'Tradicional',
      NameCoffee: 'Expresso Cremoso',
      DescriptionCoffee: 'Café expresso tradicional com espuma cremosa',
      Price: '9.90',
    },
    {
      id: 4,
      ImgCoffee: Coffee4,
      TypeCoffee: 'Tradicional',
      NameCoffee: 'Expresso Gelado',
      DescriptionCoffee: 'Bebida preparada com café expresso e cubos de gelo',
      Price: '9.90',
    },
    {
      id: 5,
      ImgCoffee: Coffee5,
      TypeCoffee: 'Tradicional',
      NameCoffee: 'Café com Leite',
      DescriptionCoffee:
        'Meio a meio de expresso tradicional com leite vaporizado',
      Price: '9.90',
    },
    {
      id: 6,
      ImgCoffee: Coffee6,
      TypeCoffee: 'Tradicional',
      NameCoffee: 'Latte',
      DescriptionCoffee:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      Price: '9.90',
    },
    {
      id: 7,
      ImgCoffee: Coffee7,
      TypeCoffee: 'Tradicional',
      NameCoffee: 'Capuccino',
      DescriptionCoffee:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      Price: '9.90',
    },
    {
      id: 8,
      ImgCoffee: Coffee8,
      TypeCoffee: 'Tradicional',
      NameCoffee: 'Macchiato',
      DescriptionCoffee:
        'Café expresso misturado com um pouco de leite quente e espuma',
      Price: '9.90',
    },
    {
      id: 9,
      ImgCoffee: Coffee9,
      TypeCoffee: 'Tradicional',
      NameCoffee: 'Mocaccino',
      DescriptionCoffee:
        'Café expresso com calda de chocolate, pouco leite e espuma',
      Price: '9.90',
    },
    {
      id: 10,
      ImgCoffee: Coffee10,
      TypeCoffee: 'Tradicional',
      NameCoffee: 'Chocolate Quente',
      DescriptionCoffee:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      Price: '9.90',
    },
    {
      id: 11,
      ImgCoffee: Coffee11,
      TypeCoffee: 'Tradicional',
      NameCoffee: 'Cubano',
      DescriptionCoffee:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      Price: '9.90',
    },
    {
      id: 12,
      ImgCoffee: Coffee12,
      TypeCoffee: 'Tradicional',
      NameCoffee: 'Havaiano',
      DescriptionCoffee: 'Bebida adocicada preparada com café e leite de coco',
      Price: '9.90',
    },
    {
      id: 13,
      ImgCoffee: Coffee13,
      TypeCoffee: 'Tradicional',
      NameCoffee: 'Árabe',
      DescriptionCoffee:
        'Bebida preparada com grãos de café árabe e especiarias',
      Price: '9.90',
    },
  ]

  return (
    <ContainerHome>
      <BannerCoffee />
      <h1>Nossos cafés</h1>
      <ContainerCoffees>
        {coffees.map((item) => {
          return (
            <Coffee
              key={item.id}
              ImgCoffee={item.ImgCoffee}
              TypeCoffee={item.TypeCoffee}
              Coffee={item.NameCoffee}
              DescriptionCoffee={item.DescriptionCoffee}
              Price={Number(item.Price)}
            />
          )
        })}
      </ContainerCoffees>
    </ContainerHome>
  )
}
