import styled, { css } from 'styled-components';
import bgImgM from '../../../assets/bg-shorten-mobile.svg';
import bgImgD from '../../../assets/bg-shorten-desktop.svg';
import Button from '../../Buttons/Button';

const FormWrapper = styled.form`
  position: relative;
  margin-bottom: 2.4rem;
  padding: 2.4rem;
  display: grid;
  background-color: ${({ theme }) => theme.colorSecondary};
  background-image: url(${bgImgM});
  background-repeat: no-repeat;
  background-position: top right;
  border-radius: 1rem;

  & ${Button} {
    margin-top: 1.6rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    background-image: url(${bgImgD});
    padding: 5.2rem 6.4rem;
    display: flex;
    align-items: center;
    gap: 2.4rem;

    & ${Button} {
      margin-top: 0;
    }
  }
`;

const Input = styled.input`
  padding: 0.3rem 1.6rem;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 3.6rem;
  letter-spacing: 0.012rem;
  font-family: inherit;
  color: ${({ theme }) => theme.colorHeading};
  background: hsl(0, 0%, 100%);
  border-radius: 0.5rem;
  border: 3px solid transparent;

  &::placeholder {
    color: hsla(257, 11%, 21%, 0.5);
  }

  &:focus {
    outline: none;
    border: 3px solid ${({ theme }) => theme.colorPrimary};
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    flex-grow: 1;
    padding: 1.1rem 3.2rem;
    font-size: 2rem;
    letter-spacing: 0.015rem;
    border-radius: 1rem;
  }

  ${({ error }) =>
    error &&
    css`
      border: 3px solid ${({ theme }) => theme.colorRed};
      color: ${({ theme }) => theme.colorRed};

      &::placeholder {
        color: hsla(0, 86%, 67%, 0.5);
      }
    `};
`;

const ErrorText = styled.p`
  margin-top: ${({ error }) => (error ? '0.4rem' : 0)};
  height: ${({ error }) => (error ? '1.8rem' : 0)};
  opacity: ${({ error }) => (error ? 1 : 0)};
  font-style: italic;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.8rem;
  letter-spacing: 0.008rem;
  color: ${({ theme }) => theme.colorRed};
  transition: all 0.3s;

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    position: absolute;
    margin: 0;
    height: unset;
    bottom: 2.6rem;
    font-size: 1.6rem;
    letter-spacing: 0.0109rem;
  }
`;

const Form = ({ error, value, loading, changeFn, submitFn }) => (
  <FormWrapper onSubmit={submitFn}>
    <Input
      error={error}
      value={value}
      onChange={changeFn}
      type="text"
      aria-label="Shorten Input"
      placeholder="Shorten a link here..."
    />
    <ErrorText error={error}>Please add a link</ErrorText>
    <Button type="submit" disabled={loading}>Shorten It!</Button>
  </FormWrapper>
);

export default Form;
