import styled from 'styled-components';
import { sharedWrapper } from '../../theme/GlobalStyles';
import ButtonRound from '../Buttons/ButtonRound';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import illustration from '../../assets/illustration-working.svg';

const Wrapper = styled.section`
  background: hsl(0, 0%, 100%);
  margin-bottom: 8.8rem;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    margin-bottom: 6.4rem;
  }
`;

const InnerWrapper = styled.div`
  ${sharedWrapper}

  @media (min-width: ${({ theme }) => theme.mediaSize.xlg}) {
    display: grid;
    gap: 10.1rem;
    grid-template-columns: 56.4rem 1fr;
  }
`;

const Content = styled.div`
  margin-top: 3.7rem;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.mediaSize.xlg}) {
    margin-top: 6.1rem;
    text-align: left;
  }
`;

const Text = styled(Paragraph)`
  margin: 1.5rem 0 3.2rem;
  font-size: 1.8rem;
  line-height: 3rem;
  letter-spacing: 0.0122rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    font-size: 2.2rem;
    line-height: 3.6rem;
    letter-spacing: 0.015rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.xlg}) {
    margin: 0.5rem 0 3.8rem;
  }
`;

const Image = styled.img`
  display: block;
  width: 136vw;
  max-width: 73.3rem;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.mediaSize.xlg}) {
    width: auto;
    order: 1;
  }
`;

const Intro = () => (
  <Wrapper>
    <InnerWrapper>
      <Image src={illustration} alt="Illustration" />
      <Content>
        <Heading>More than just shorter links</Heading>
        <Text>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </Text>
        <ButtonRound>Get Started</ButtonRound>
      </Content>
    </InnerWrapper>
  </Wrapper>
);

export default Intro;
