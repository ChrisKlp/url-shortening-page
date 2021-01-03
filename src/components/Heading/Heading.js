import styled, { css } from 'styled-components';

const Heading = styled.h1`
  font-weight: 700;
  font-size: 4.2rem;
  line-height: 4.8rem;
  letter-spacing: -0.105rem;
  color: ${({ theme }) => theme.colorHeading};

  @media (min-width: ${({ theme }) => theme.mediaSize.xlg}) {
    font-size: 8rem;
    line-height: 9rem;
    letter-spacing: -0.2rem;
  }

  ${({ h2 }) =>
    h2 &&
    css`
      font-size: 2.8rem;
      line-height: 4.8rem;
      letter-spacing: -0.07rem;

      @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
        font-size: 4rem;
        line-height: 4.8rem;
        letter-spacing: -0.1rem;
      }
    `};

  ${({ h4 }) =>
    h4 &&
    css`
      font-size: 2.2rem;
      line-height: 3.3rem;
      letter-spacing: 0;

      @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
        font-size: 2.2rem;
        line-height: 3.3rem;
        letter-spacing: 0;
      }
    `};

  ${({ h5 }) =>
    h5 &&
    css`
      font-size: 1.6rem;
      line-height: 2.4rem;
      letter-spacing: -0.025rem;

      @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
        font-size: 1.6rem;
        line-height: 2.4rem;
        letter-spacing: -0.025rem;
      }
    `};

  ${({ white }) =>
    white &&
    css`
      color: hsl(0, 0%, 100%);
    `};
`;

export default Heading;
