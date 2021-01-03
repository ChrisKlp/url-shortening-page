import { useContext } from 'react';
import styled from 'styled-components';
import { sharedWrapper } from '../../theme/GlobalStyles';
import Form from './Form/Form';
import Result from './Result/Result';
import { ShortenerContext } from '../../context/ShortenerContext';
import Loader from './Loader/Loader';

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 8rem;
  background: ${({ theme }) => theme.colorLightViolet};
  z-index: 0;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8rem;
    background: hsl(0, 0%, 100%);
    content: '';
    z-index: -1;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    padding-bottom: 9.6rem;

    &::before {
      height: 8.4rem;
    }
  }
`;

const InnerWrapper = styled.div`
  ${sharedWrapper}
`;

const ResultsListWrapper = styled.ul`
  margin-top: 2.4rem;
  display: grid;
  gap: 2.4rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    gap: 1.6rem;
  }
`;

const Shortener = () => {
  const {
    error,
    value,
    results,
    isLoading,
    handleChange,
    handleSubmit,
    toggleCopyButton,
  } = useContext(ShortenerContext);

  const resultsList = results.map(({ id, full_short_link, original_link, copied }) => (
    <Result
      key={id}
      link={original_link}
      shortLink={full_short_link}
      id={id}
      copied={copied}
      toggleCopyButton={toggleCopyButton}
    />
  ));

  return (
    <Wrapper>
      <InnerWrapper>
        <Form
          error={error}
          value={value}
          loading={isLoading}
          changeFn={handleChange}
          submitFn={handleSubmit}
          autocomplete="off"
        />
        {isLoading && <Loader />}
        <ResultsListWrapper>{resultsList}</ResultsListWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Shortener;
