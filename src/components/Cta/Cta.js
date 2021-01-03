import ButtonRound from '../Buttons/ButtonRound';
import Heading from '../Heading/Heading';
import styled from 'styled-components';
import bgMobile from '../../assets/bg-boost-mobile.svg';
import bgDesktop from '../../assets/bg-boost-desktop.svg';

const Wrapper = styled.section`
  padding: 9rem 3.2rem;
  background-color: ${({ theme }) => theme.colorSecondary};
  background-image: url(${bgMobile});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding: 5.7rem;
    background-image: url(${bgDesktop});
  }

  ${Heading} {
    margin-bottom: 1.6rem;

    @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
      margin-bottom: 3.2rem;
    }
  }
`;

const Cta = () => {
  return (
    <Wrapper>
      <Heading h2 white as="h2">
        Boost your links today
      </Heading>
      <ButtonRound>Get Started</ButtonRound>
    </Wrapper>
  );
};

export default Cta;
