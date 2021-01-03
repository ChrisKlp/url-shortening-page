import styled from 'styled-components';

const Paragraph = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.8rem;
  letter-spacing: 0.01rem;
  color: ${({ theme }) => theme.colorText};

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    font-size: 1.8rem;
    line-height: 3.2rem;
    letter-spacing: 0.012rem;
  }
`;

export default Paragraph;