import styled from 'styled-components';
import SocialLinks from './SocialLinks/SocialLinks';
import Logo from '../Logo/Logo';
import Nav from './Nav/Nav';
import { sharedWrapper } from '../../theme/GlobalStyles';

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colorFooter};
`;

const InnerWrapper = styled.div`
  ${sharedWrapper}
  padding: 5.4rem 0 5.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const WhiteLogo = styled(Logo)`
  display: block;
  fill: hsl(0, 0%, 100%);

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    flex-grow: 1;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <WhiteLogo />
        <Nav />
        <SocialLinks />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Footer;
