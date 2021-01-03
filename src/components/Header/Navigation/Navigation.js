import styled from 'styled-components';
import Button from '../../Buttons/Button';

const Wrapper = styled.nav`
  position: absolute;
  top: 5.6rem;
  width: 100%;
  display: ${({ active }) => (active ? 'block' : 'none')};

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    position: static;
    display: block;
    margin-left: 4.3rem;
  }
`;

const InnerWrapper = styled.div`
  padding: 4rem 2.4rem;
  background: ${({ theme }) => theme.colorSecondary};
  border-radius: 1rem;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0;
    background: transparent;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    flex-direction: row;
  }
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    flex-direction: row;
    align-items: center;
  }
`;

const Link = styled.a`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.7rem;
  color: hsl(0, 0%, 100%);
  transition: color 0.2s;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    font-size: 1.5rem;
    line-height: 2.2rem;
    color: ${({ theme }) => theme.colorText};

    &:hover {
      color: ${({ theme }) => theme.colorHeading};
    }
  }
`;

const Divider = styled.div`
  margin: 3rem 0;
  height: 1px;
  background: ${({ theme }) => theme.colorText};
  opacity: 0.25;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    display: none;
  }
`;

const SignUpButton = styled(Button)`
  border-radius: 2.8rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding: 0.9rem 2.3rem;
    max-width: 10.5rem;
    font-size: 1.5rem;
    line-height: 2.2rem;
  }
`;

const Navigation = ({ active }) => {
  return (
    <Wrapper active={active}>
      <InnerWrapper>
        <NavList>
          <li>
            <Link href="#">Features</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
        </NavList>
        <Divider />
        <LoginWrapper>
          <Link href="#">Login</Link>
          <SignUpButton>Sign Up</SignUpButton>
        </LoginWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Navigation;
