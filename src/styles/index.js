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

export const HeaderTitle = styled.h1`
  font-size: 5em;
  margin-top: 1.5em;
  display: block;
  text-align: left;

  @media (max-width: 660px) {
    width: 100%;
    height: auto;
    text-align: center;
  }
`;

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column-reverse;
  border: 3px solid slateblue;
  border-radius: 10px;
  width: 100%;
  height: 350px;
  position: relative;
  cursor: pointer;
  margin-bottom: 2.5em;
`;

export const ContentTitle = styled.div`
  background-color: rgba(102, 51, 153, 0.9);
  padding: 5px;
  flex: 0.2;
  z-index: 1;
  overflow: hidden;

  & h2 {
    font-size: 2.5em;
    color: white;
  }

  &:hover {
    flex: 1;

    & p {
      display: inherit;
    }
  }

  & p {
    font-size: 1.2em;
    color: snow;
    padding: 10px;
    display: none;
  }
  transition-duration: 0.1s;
  transition-timing-function: linear;
`;

export const ContentImage = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex: 0.8;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
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

  & * {
    display: grid;
  }
  &:hover {
    background-image: none;
    background-color: rebeccapurple;
    border: 3px solid rebeccapurple;
    color: white;
  }
`;

export const NavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #262626;
  z-index: 1;
  display: flex;
  overflow: hidden;

  & * {
    font-size: 1.6em;
    color: snow;
  }
`;

export const NavIndex = styled.div`
  margin: 0.5em;
  align-self: center;

  a {
    color: white;

    &:focus {
      text-decoration: none;
    }
    &:hover {
      text-decoration: none;
    }
  }
`;

export const NavContent = styled.div`
  margin: 0.5em;
  text-align: right;
  width: 100%;

  a {
    color: white;
    width: 200px;
    height: inherit;
    display: inline-block;
    text-align: center;

    &:focus {
      text-decoration: none;
    }
    &:hover {
      text-decoration: none;
    }
  }

  .active {
    background-color: rebeccapurple;
    border-radius: 30px;
    padding: 5px;
  }
`;

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: right;
  background-color: snow;
  z-index: 1;

  & * {
    width: auto;
    height: auto;
    margin: 2px;
    max-width: 50px;
    max-height: 50px;
  }
`;
