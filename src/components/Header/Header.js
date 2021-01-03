import styled from 'styled-components';
import Logo from '../Logo/Logo';
import { sharedWrapper } from '../../theme/GlobalStyles';
import Navigation from './Navigation/Navigation';
import { useEffect, useState } from 'react';
import iconMenu from '../../assets/icon-hamburger.svg';

const Wrapper = styled.header`
  padding: 4rem 0 2.3rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding: 4.8rem 0 7.8rem;
  }
`;

const InnerWrapper = styled.div`
  ${sharedWrapper}

  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogo = styled(Logo)`
  display: block;
  flex-shrink: 0;
`;

const MenuToggleBtn = styled.button`
  margin: -2rem -1rem;
  padding: 2rem;
  width: 2.4rem;
  height: 2.1rem;
  border: none;
  background-color: transparent;
  background: url(${iconMenu}) no-repeat center;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    display: none;
  }
`;

const Header = () => {
  const mediaQuery = window.matchMedia('(min-width: 768px)');
  const [active, setActive] = useState(false);

  const toggleMenu = () => setActive(prev => !prev);

  useEffect(() => {
    const handler = () => setActive(false);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [mediaQuery]);

  return (
    <Wrapper>
      <InnerWrapper>
        <a href="/" aria-label="Logo Shortly">
          <StyledLogo />
        </a>
        <MenuToggleBtn onClick={toggleMenu} aria-label="Menu Toggle Button" />
        <Navigation active={active} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Header;
