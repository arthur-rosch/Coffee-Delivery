import styled from 'styled-components'

export const ContainerHome = styled.main`
  h1 {
    margin-bottom: 1rem;

    font-size: 32px;
    font-weight: 800;
    font-family: 'Baloo 2', sans-serif;
  }
`
export const ContainerCoffees = styled.div`
  width: 70rem;
  height: 85rem;

  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
`
