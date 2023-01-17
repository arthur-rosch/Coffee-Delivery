import styled from 'styled-components'
export const ContainerCardCoffee = styled.div`
  width: 23rem;
  height: 5rem;

  margin-bottom: 1.5rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  p {
    font-size: 16px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
  }
`
export const ContainerInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: start;
  }
`
export const NameCoffee = styled.p`
  font-size: 17px;
  font-weight: 400;
  line-height: 20.8px;
  font-family: 'Roboto', sans-serif;
`
export const AmountCoffee = styled.input`
  height: 2.375rem;
  width: 4.8125rem;
  margin-right: 0.5rem;
  margin-left: 1.4375rem;

  text-align: center;

  border: 0;
  outline: none;
  border-radius: 6px;

  background: ${(props) => props.theme['base-button']};
`
export const ButtonRemoveCoffee = styled.button`
  width: 5.6875rem;
  height: 2rem;

  gap: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  outline: none;
  border-radius: 6px;

  background: ${(props) => props.theme['base-button']};

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
