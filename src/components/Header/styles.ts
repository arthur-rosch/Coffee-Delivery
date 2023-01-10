import styled from 'styled-components'

export const ContainerHeader = styled.div`
  width: 100%;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${(props) => props.theme.background};
`
export const ContainerCartAndLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ButtonLocation = styled.button`
  width: 8.9375rem;
  height: 2.375rem;
  margin-right: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  outline: none;
  border-radius: 6px;

  color: ${(props) => props.theme['purple-dark']};
  background: ${(props) => props.theme['purple-light']};

  span {
    margin-left: 0.25rem;
    font-weight: bold;
    color: ${(props) => props.theme.purple};
  }
  &:hover {
    cursor: pointer;
  }
`
export const ButtonCart = styled.button`
  width: 2.375rem;
  height: 2.375rem;

  border: 0;
  outline: none;
  border-radius: 6px;

  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};

  &:hover {
    cursor: pointer;
  }
`
