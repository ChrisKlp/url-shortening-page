import styled from 'styled-components';
import ButtonSmall from '../../Buttons/ButtonSmall';

const Wrapper = styled.li`
  padding: 1.6rem;
  display: grid;
  gap: 0.6rem;
  background: hsl(0, 0%, 100%);
  border-radius: 0.5rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    padding: 1.8rem 3.2rem;
    display: flex;
    gap: 2.4rem;
  }
`;

const Divider = styled.div`
  margin: 0 -1.6rem;
  height: 1px;
  background-color: hsla(257, 8%, 63%, 0.25);

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    display: none;
  }
`;

const Link = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 3.6rem;
  letter-spacing: 0.012rem;
  color: ${({ theme }) => theme.colorHeading};

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    flex-grow: 1;
    font-size: 2rem;
    letter-spacing: 0.015rem;
  }
`;

const ShortLink = styled(Link)`
  color: ${({ theme }) => theme.colorPrimary};

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    flex-grow: 0;
  }
`;

const ShortenResult = ({ link, shortLink, id, toggleCopyButton, copied }) => {
  const copyShortLink = id => {
    navigator.clipboard.writeText(shortLink);
    toggleCopyButton(id);
  };

  return (
    <Wrapper>
      <Link>{link}</Link>
      <Divider />
      <ShortLink>{shortLink}</ShortLink>
      <ButtonSmall onClick={() => copyShortLink(id)} active={copied}>
        {copied ? 'Copied!' : 'Copy'}
      </ButtonSmall>
    </Wrapper>
  );
};

export default ShortenResult;
