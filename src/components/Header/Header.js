import styled from 'styled-components';
import Logo from '../Logo/Logo';
import { sharedWrapper } from '../../theme/GlobalStyles';
import Navigation from './Navigation/Navigation';
import MobileNavButton from './MobileNavButton/MobileNavButton';
import { useEffect, useState } from 'react';

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

const MenuToggleBtn = styled(MobileNavButton)`
  margin: -1rem -1.3rem;
  padding: 1rem 1.3rem;

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
        <a href="/">
          <StyledLogo />
        </a>
        <MenuToggleBtn onClick={toggleMenu} />
        <Navigation active={active} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Header;
