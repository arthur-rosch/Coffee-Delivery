import styled from 'styled-components'

export const ContainerBannerCoffee = styled.div`
  width: 100%;
  height: 34rem;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const ContainerInformation = styled.div`
  margin-right: 3.5rem;
  h1 {
    font-size: 48px;
    font-weight: 800;
    line-height: 62.4px;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-title']};
  }
  p {
    margin-top: 1rem;
    font-size: 20px;
    line-height: 26px;
    font-family: 'Roboto', sans-serif;
  }
`
export const ContainerBenefits = styled.div`
  margin-top: 4.125rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const ContainerInfo = styled.div`
  height: 2.625rem;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  p {
    margin-right: 2.5rem;
    margin-bottom: 1rem;
    font-size: 16px;
    font-weight: 400;
    line-height: 20.8px;
    font-family: 'Roboto' sans-serif;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme['base-text']};
  }
`
export const ContainerIconBase = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 0.75rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white};
`
export const ContainerCart = styled(ContainerIconBase)`
  background: ${(props) => props.theme['yellow-dark']};
`
export const ContainerPackage = styled(ContainerIconBase)`
  background: ${(props) => props.theme['base-text']};
`
export const ContainerTimer = styled(ContainerIconBase)`
  background: ${(props) => props.theme.yellow};
`
export const ContainerCoffee = styled(ContainerIconBase)`
  background: ${(props) => props.theme.purple};
`
