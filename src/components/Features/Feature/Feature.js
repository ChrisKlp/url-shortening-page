import Heading from '../../Heading/Heading';
import Paragraph from '../../Paragraph/Paragraph';
import styled from 'styled-components';

const Wrapper = styled.li`
  position: relative;
  margin-top: 4.4rem;
  display: flex;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    justify-content: flex-start;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.xlg}) {
    &:nth-child(2) {
      margin-top: 8.8rem;
    }

    &:nth-child(3) {
      margin-top: 13.2rem;
    }
  }
`;

const Icon = styled.div`
  position: absolute;
  top: -4.4rem;
  display: grid;
  place-items: center;
  width: 8.8rem;
  height: 8.8rem;
  background-color: ${({ theme }) => theme.colorSecondary};
  border-radius: 50%;

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    left: 3.2rem;
  }
`;

const Content = styled.div`
  padding: 7.7rem 3.2rem 4.1rem;
  background: hsl(0, 0%, 100%);
  border-radius: 0.5rem;
  text-align: center;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    text-align: left;
  }
`;

const Text = styled(Paragraph)`
  margin-top: 1.2rem;
  font-size: 1.5rem;
  line-height: 2.6rem;
  letter-spacing: 0;
`;

const Feature = ({ icon, title, content }) => {
  return (
    <Wrapper>
      <Icon>
        <img src={icon} alt="Icon" />
      </Icon>
      <Content>
        <Heading h4 as="h4">
          {title}
        </Heading>
        <Text>{content}</Text>
      </Content>
    </Wrapper>
  );
};

export default Feature;
