import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 2.4rem;
  height: 2.1rem;
  display: grid;
  gap: 0.6rem;
`;

const Line = styled.div`
  width: 2.4rem;
  height: 0.3rem;
  background: ${({ theme }) => theme.colorText};
`;

const MobileNavButton = ({ ...props }) => (
  <Button {...props}>
    <Wrapper>
      <Line />
      <Line />
      <Line />
    </Wrapper>
  </Button>
);

export default MobileNavButton;
