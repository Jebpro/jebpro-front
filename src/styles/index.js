import styled from 'styled-components';

export const Title = styled.h1`
  ${props => props.home ? `
    font-size: 10em;
    margin-top: 1em;
    display: block;
  ` : `
    font-size: 5em;
    display: block;
  `}
  text-align: center;

  @media (max-width: 660px) {
    width: 100%;
    height: auto;
  }
`;

export const ButtonToolbar = styled.div`
  ${props => props.home ? `
    display: flex;
    padding: 5em;
  ` : `
    display: flex;
    padding: 1em;
  `}
  transition-duration: 0.4s;
  transition-timing-function: linear;
`;

export const Button = styled.button.attrs({
  className: "col-md-3"
})`
  ${props => props.home ? `
    color: white;
  ` : `
    color: black;
  `}
  margin: 0.3em;
  padding: 0.3em;
  width: 100%;
  font-size: 2em;
  background: transparent;
  border: 3px solid slateblue;
  border-radius: 45px;
  transition-duration: 0.1s;
  transition-timing-function: linear;
  &:hover {
    background-color: rebeccapurple;
    border: 3px solid rebeccapurple;
    color: white;
  }
  &:focus {
    background-color: rebeccapurple;
    color: white;
  }
`;

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: right;

  & * {
    width: auto;
    height: auto;
    max-width: 50px;
    max-height: 50px;
  }
`;

export const Wrapper = styled.div`
  transition-duration: 0.4s;
  transition-timing-function: linear;
`;
