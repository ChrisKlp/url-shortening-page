import styled from 'styled-components';

const Button = styled.button`
  padding: 1.1rem 4rem 1rem;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: hsl(0, 0%, 100%);
  text-align: center;
  background: ${({ theme, disabled }) =>
    disabled ? theme.colorPrimaryAlt : theme.colorPrimary};
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  pointer-events: ${({ disabled }) => disabled && 'none'};
  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colorPrimaryAlt};
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    padding: 1.8rem 4rem 1.6rem;
    font-size: 2rem;
    line-height: 3rem;
    border-radius: 1rem;
  }
`;

export default Button;
