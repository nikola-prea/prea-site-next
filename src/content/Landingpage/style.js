import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1280px;
  padding: ${({ padding }) => padding ?? ' 0 2rem'};
`;

const Row = styled.div``;

export { Container };
