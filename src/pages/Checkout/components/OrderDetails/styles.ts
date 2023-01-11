import styled from 'styled-components'
export const ContainerOrder = styled.div`
  margin-left: 2rem;
  margin-top: -3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    left: 67rem;
    top: 7.125rem;
    width: 9.75rem;
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

export const ContainerOrderDetails = styled.div`
  width: 28rem;
  height: 31.125rem;
  padding: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: ${(props) => props.theme['base-card']};
`
export const ContainerCoffeeList = styled.div``
export const ContainerValueTotal = styled.div`
  width: 23rem;
  height: 5.75rem;
  margin-bottom: 1.5rem;

  div {
    margin-bottom: 0.75rem;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 130%;
      font-style: normal;
      font-family: 'Roboto', sans-serif;
    }
    strong {
      font-size: 20px;
      font-weight: 700;
      line-height: 130%;
      font-style: normal;
      font-family: 'Roboto', sans-serif;
    }
  }
`
export const ButtonConfirmOrder = styled.button`
  width: 100%;
  height: 2.875rem;

  border: 0;
  outline: none;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 700;
  line-height: 160%;
  font-style: normal;
  font-family: 'Roboto', sans-serif;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['yellow-dark']};
`
