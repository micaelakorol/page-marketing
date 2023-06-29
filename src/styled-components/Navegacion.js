import styled from "styled-components";
import { colores } from "./Colores";
import { Link, NavLink } from "react-router-dom";

const Header = styled.header`
  width: 100%;
  height: 2.9rem;
  padding: 0.5rem;
  background: ${colores.blanco};
  display: grid;
  grid-template-columns: repeat(2, 40% 60%);
  margin-bottom: 0.1rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  @media (max-width: 767px) {
    display: none;
  }
`;

const Elements = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-right: 4rem;
`;

const Links = styled(NavLink)`
  color: ${colores.links};
  font-family: "Karla", sans-serif;
  font-size: 0.99rem;
  font-weight: 400;
  padding: 0.5rem;
  text-transform: uppercase;
  &:hover {
    color: ${colores.verdeHLinks};
    text-decoration: underline;
  }
  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }
`;

const Formulario = styled(Links)``;

const ContenedorImg = styled(Link)`
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-left: 3rem;
  .logo {
    padding: 0.5rem;
  }
`;

export { Elements, ContenedorImg, Links, Header, Formulario };