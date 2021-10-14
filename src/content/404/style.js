import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainTitle = styled.h1`
  color: var(--moon-D6);
  font-weight: 600;
  font-size: 8rem;
  padding: 0;
  margin-bottom: 2rem;
`;

export const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  color: var(--moon-D6);
  padding: 0;
`;

export const ExplanationText = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: var(--moon-D6);
  padding: 0;
  margin-bottom: 2rem;
`;

export const Uppercase = styled.span`
  p {
    text-transform: uppercase;
  }
`;
