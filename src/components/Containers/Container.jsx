import styled from "styled-components";

const Container = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.container.padding};
  width: 100%;

  /* responsive */
  @media ${({ theme }) => theme.devices.mobile} {
    flex-direction: column;
    padding: 0 1rem;
  }

  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: row;
    padding: 0 1.5rem;
  }

  @media ${({ theme }) => theme.devices.desktop} {
    padding: ${({ theme }) => theme.container.padding};
  }
`;

export default Container;
