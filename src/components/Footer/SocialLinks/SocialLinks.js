import styled from 'styled-components';
import Facebook from '../../Icons/Facebook';
import Twitter from '../../Icons/Twitter';
import Pinterest from '../../Icons/Pinterest';
import Instagram from '../../Icons/Instagram';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  svg {
    fill: hsl(0, 0%, 100%);
    transition: fill 0.3s;

    &:hover {
      fill: ${({ theme }) => theme.colorPrimary};
    }
  }
`;

const SocialLinks = () => (
  <Wrapper>
    <a href="#" aria-label="Facebook">
      <Facebook />
    </a>
    <a href="#" aria-label="Twitter">
      <Twitter />
    </a>
    <a href="#" aria-label="Pinterest">
      <Pinterest />
    </a>
    <a href="#" aria-label="Instagram">
      <Instagram />
    </a>
  </Wrapper>
);

export default SocialLinks;
