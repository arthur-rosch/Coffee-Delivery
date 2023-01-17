import styled from 'styled-components'

export const ContainerCoffee = styled.div`
  width: 16rem;
  height: 19.375rem;

  margin-right: 2rem;

  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: ${(props) => props.theme['base-card']};
`
export const ContainerDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    margin-top: -2rem;
  }
  span {
    margin-top: 1rem;
    margin-bottom: 1.25rem;

    font-size: 12px;
    font-weight: bold;
    line-height: 13px;
    line-height: 130%;
    font-family: 'Roboto', sans-serif;

    border-radius: 100px;
    padding: 4px 8px 4px 8px;

    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
  }

  h3 {
    margin-bottom: 0.5rem;

    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
    line-height: 130%;
    font-family: 'Baloo 2', sans-serif;

    color: ${(props) => props.theme['base-subtitle']};
  }
  p {
    margin: 0 1.25rem 2.0625rem 1.25rem;

    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    line-height: 130%;
    font-family: 'Roboto', sans-serif;

    color: ${(props) => props.theme['base-label']};
  }
`
export const ContainerBuy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['base-text']};
  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 18.2px;
    font-family: 'Robot', sans-serif;
  }
  strong {
    font-size: 24px;
    font-weight: 800;
    line-height: 31.2px;
    font-family: 'Baloo 2', sans-serif;
  }
`
export const ContainerTheAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    height: 2.375rem;
    width: 4.8125rem;
    margin-right: 0.5rem;
    margin-left: 1.4375rem;

    text-align: center;

    border: 0;
    outline: none;
    border-radius: 6px;

    background: ${(props) => props.theme['base-button']};
  }
`
export const ContainerButtonCart = styled.button`
  width: 2.375rem;
  height: 2.375rem;

  border: 0;
  outline: none;
  border-radius: 6px;

  background: ${(props) => props.theme['purple-dark']};

  &:disabled {
    opacity: 0.7;
  }
  &:not(:disabled):hover {
    transition: 0.3s;
    background: ${(props) => props.theme.purple};
  }
`
