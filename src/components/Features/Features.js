import styled from 'styled-components';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import { features } from './data';
import Feature from './Feature/Feature';
import { sharedWrapper } from '../../theme/GlobalStyles';

const Wrapper = styled.section`
  background: ${({ theme }) => theme.colorLightViolet};
`;

const InnerWrapper = styled.div`
  ${sharedWrapper}
  text-align: center;

  & > ${Heading} {
    margin-bottom: 1.6rem;
  }

  & > ${Paragraph} {
    margin: 0 auto;
    max-width: 54rem;
  }
`;

const FeaturesListWrapper = styled.ul`
  position: relative;
  padding: 4.8rem 0 8rem;
  display: grid;
  gap: 4.8rem;

  &:before {
    position: absolute;
    top: 8rem;
    bottom: 8rem;
    left: 50%;
    width: 0.8rem;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colorPrimary};
    content: '';
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    padding: 5.6rem 0 12rem;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;

    &:before {
      top: 50%;
      bottom: unset;
      left: 0;
      width: 100%;
      height: 0.8rem;
      transform: translateY(-50%);
    }
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.xlg}) {
    align-items: start;
  }
`;

const Features = () => {
  const featuresList = features.map(({ id, icon, title, content }) => (
    <Feature key={id} icon={icon} title={title} content={content} />
  ));

  return (
    <Wrapper>
      <InnerWrapper>
        <Heading h2 as="h2">
          Advanced Statistics
        </Heading>
        <Paragraph>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </Paragraph>
        <FeaturesListWrapper>{featuresList}</FeaturesListWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Features;
