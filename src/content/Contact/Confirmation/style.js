import styled from 'styled-components';

export const ConfirmationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem auto;
  max-width: var(--container-width);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  padding: 2rem 5rem;
  text-align: center;
  svg {
    display: block;
    margin: 0 auto;
  }
`;

export const Mail = styled.span`
  color: var(--gray);
  font-weight: 500;
`;

export const Title = styled.h1`
  color: #222224;
  width: ${({ layout }) => (layout ? `calc(${layout}*100% - (1 - ${layout})*var(--card-gap) );` : '100%')};
  margin: 0;
`;
export const Subtitle = styled.h4`
  color: #222224;
  width: ${({ layout }) => (layout ? `calc(${layout}*100% - (1 - ${layout})*var(--card-gap) );` : '100%')};
`;
export const Phrase = styled.p`
  width: ${({ layout }) => (layout ? `calc(${layout}*100% - (1 - ${layout})*var(--card-gap) );` : '100%')};
  color: #222224;
`;
