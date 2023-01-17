import styled from 'styled-components'
export const ContainerSuccess = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: 800;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['yellow-dark']};
  }
  p {
    font-size: 20px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
  }
  img {
    margin-left: 6.375rem;
    margin-bottom: -15.25rem;
  }
`
export const ContainerInformation = styled.div`
  width: 32.875rem;
  height: 16.875rem;
  margin-top: 2.5rem;

  section {
    padding: 2.5rem;
    margin-top: 2.5rem;

    border-radius: 6px 36px 6px 36px;
    border: solid 1px ${(props) => props.theme.yellow};
  }
`
const InformationBase = styled.div`
  display: flex;

  div {
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
  }
  p {
    font-size: 16px;
  }
`
export const DeliveryAddress = styled(InformationBase)`
  display: flex;
  align-items: center;

  div {
    background: ${(props) => props.theme.purple};
  }
`
export const DeliveryTime = styled(InformationBase)`
  margin: 2rem 0 2rem 0;

  display: flex;
  align-items: center;

  div {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
export const FormOfPayment = styled(InformationBase)`
  display: flex;
  align-items: center;

  div {
    background: ${(props) => props.theme.yellow};
  }
`
