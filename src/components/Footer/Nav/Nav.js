import styled from 'styled-components';
import Heading from '../../Heading/Heading';

const Wrapper = styled.nav`
  margin: 4.9rem 0 4.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    flex-direction: row;
    align-items: flex-start;
    gap: 0;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    margin: 0;
  }
`;

const Column = styled.div`
  display: grid;
  gap: 1rem;
  text-align: center;

  ${Heading} {
    margin-bottom: 1.2rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    width: 18vw;
    max-width: 19.2rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    text-align: left;
  }
`;

const Link = styled.a`
  font-size: 1.5rem;
  line-height: 2.2rem;
  letter-spacing: -0.023rem;
  color: ${({ theme }) => theme.colorGray};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colorPrimary};
  }
`;

const Nav = () => (
  <Wrapper>
    <Column>
      <Heading h5 as="h5" white>
        Features
      </Heading>
      <Link href="#">Link Shortening</Link>
      <Link href="#">Branded Links</Link>
      <Link href="#">Analytics</Link>
    </Column>
    <Column>
      <Heading h5 as="h5" white>
        Resources
      </Heading>
      <Link href="#">Blog</Link>
      <Link href="#">Developers</Link>
      <Link href="#">Support</Link>
    </Column>
    <Column>
      <Heading h5 as="h5" white>
        Company
      </Heading>
      <Link href="#">About</Link>
      <Link href="#">Our Team</Link>
      <Link href="#">Careers</Link>
      <Link href="#">Contact</Link>
    </Column>
  </Wrapper>
);

export default Nav;
