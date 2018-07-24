import styled from 'styled-components';
import placeholder from "../images/placeholder.png";

function GetImage(value) {
  switch (value) {
    case "news":
    case "aboutme":
    case "projects":
    case "contact":
      return placeholder;
    default:
      return null;
  }
}

export const Title = styled.h1`
  font-size: 10em;
  margin-top: 1em;
  display: block;
  text-align: center;

  @media (max-width: 660px) {
    width: 100%;
    height: auto;
  }
`;

export const ButtonToolbar = styled.div`
  text-align: center;
  padding: 2em;
  transition-duration: 0.4s;
  transition-timing-function: linear;
`;

export const Button = styled.button`
  margin: 1.5em;
  font-size: 2em;
  width: 150px;
  height: 150px;
  color: transparent;
  background-image: url(${props => GetImage(props.value)});
  background-size: cover;
  background-repeat: no-repeat;
  border: 3px solid slateblue;
  border-radius: 80px;
  transition-duration: 0.2s;
  transition-timing-function: linear;
  &:hover {
    background-image: none;
    background-color: rebeccapurple;
    border: 3px solid rebeccapurple;
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
    margin: 2px;
    max-width: 50px;
    max-height: 50px;
  }
`;
