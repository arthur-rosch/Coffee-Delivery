import styled from 'styled-components'
export const ContainerCheckout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ContainerForm = styled.form`
  width: 40rem;
  height: 36.9375rem;
  margin-top: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h2 {
    left: 25rem;
    top: 7.125rem;
    width: 10.625rem;
    height: 1.4375rem;
    position: absolute;

    margin-bottom: 1rem;

    font-size: 18px;
    font-weight: 700;
    line-height: 23.4px;
    font-family: 'Baloo 2', sans-serif;

    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const ContainerDeliveryData = styled.div`
  width: 40rem;
  height: 23.25rem;

  background: ${(props) => props.theme['base-card']};
`
export const ContainerTextDeliveryData = styled.div`
  padding: 2.5rem;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  p {
    font-size: 16px;
    color: ${(props) => props.theme['base-subtitle']};
  }
  span {
    font-size: 14px;
    color: ${(props) => props.theme['base-text']};
  }
`
export const InputsCityAndState = styled.div``

export const InputsHouseNumberAndComplement = styled.div``

export const ContainerInputs = styled.div`
  padding: 0 2.5rem 2.5rem 2.5rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`
export const BaseInput = styled.input`
  height: 2.625rem;
  padding: 0.75rem;

  border: 0;
  outline: none;
  border-radius: 4px;
  border: 2px solid ${(props) => props.theme['base-button']};

  color: ${(props) => props.theme['base-label']};
  background: ${(props) => props.theme['base-input']};

  &:focus {
    border: 2px solid ${(props) => props.theme['yellow-dark']};
  }
`
export const ZipCode = styled(BaseInput)`
  width: 12.5rem;
  margin-bottom: 1rem;
`
export const HouseStreet = styled(BaseInput)`
  width: 35rem;
  margin-bottom: 1rem;
`
export const HouseNumber = styled(BaseInput)`
  width: 12.5rem;
  margin-bottom: 1rem;
`
export const Complement = styled(BaseInput)`
  width: 21.75rem;
  margin-bottom: 1rem;
  margin-left: 0.75rem;
`
export const Neighborhood = styled(BaseInput)`
  width: 12.5rem;
`
export const City = styled(BaseInput)`
  width: 17.25rem;
  margin: 0 0.75rem 0 0.75rem;
`
export const State = styled(BaseInput)`
  width: 3.75rem;
`

export const ContainerFormOfPayment = styled.div`
  width: 40rem;
  height: 12.9375rem;

  padding: 2.5rem;
  margin-top: 0.75rem;

  background: ${(props) => props.theme['base-card']};
`
export const ContainerTextFormOfPayment = styled.div`
  margin-bottom: 2rem;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  p {
    display: flex;
    align-items: center;

    font-size: 16px;
    color: ${(props) => props.theme['base-subtitle']};
  }
  span {
    font-size: 14px;
    color: ${(props) => props.theme['base-text']};
  }
`
export const ContainerPayment = styled.div`
  margin-top: 2rem;

  display: flex;
`
export const ButtonBase = styled.input`
  -webkit-appearance: none;
  appearance: none;

  width: 11.166875rem;
  height: 3.1875rem;

  cursor: pointer;

  font-size: 12px;
  font-weight: 400;
  line-height: 19.2px;
  font-family: 'Roboto', sans-serif;

  border: 0;
  outline: none;
  border-radius: 6px;

  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-button']};

  &:checked {
    border: 2px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }
`
export const ContainerPaymentBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    margin: 1rem 0;

    position: absolute;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    label {
      margin-left: 0.75rem;

      font-size: 12px;
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
export const ContainerCreditCard = styled(ContainerPaymentBase)``
export const ButtonCreditCard = styled(ButtonBase)``

export const ContainerDebitCard = styled(ContainerPaymentBase)``
export const ButtonDebitCard = styled(ButtonBase)`
  margin-left: 0.75rem;
  margin-right: 0.75rem;
`
export const ContainerCash = styled(ContainerPaymentBase)``
export const ButtonCash = styled(ButtonBase)``
