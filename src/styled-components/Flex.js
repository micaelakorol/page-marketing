import styled from "styled-components";

const Flex = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 1900px) {
    width: 75vw;
  }
  @media (max-width: 1024px) {
    width: 100vw;
    gap: 0.3rem;
  }
  @media (max-width: 768px) {
    padding: 0;
  }
`;
const Contenedor = styled(Flex)`
  overflow-y: hidden;
  margin: 0.8rem auto;
  border-radius: 0.5rem;
  gap: 1rem;
`;

export { Flex, Contenedor };
