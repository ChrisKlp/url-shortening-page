import styled from 'styled-components';
import Button from './Button';

const ButtonSmall = styled(Button)`
  padding: 0.9rem 4rem 0.7rem;
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-align: center;
  background: ${({ theme, active }) => active && theme.colorSecondary};

  &:hover {
    background: ${({ theme }) => theme.colorSecondary};
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding: 1rem 1rem 0.7rem;
    font-size: 1.5rem;
    line-height: 2.2rem;
    width: 10.3rem;
    border-radius: 0.5rem;
  }
`;

export default ButtonSmall;
