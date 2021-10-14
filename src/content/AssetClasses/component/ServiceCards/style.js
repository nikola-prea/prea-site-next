import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 1200px;
`;

export const CardsWrapper = styled.div`
  /* padding: ${({ padding }) => padding ?? '0 40px'};
  display: flex;
  align-items: center;
  justify-content: center; */
  max-width: var(--container-width);
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) and (min-width: 320px) {
    padding: 0 1rem;
  }
`;
