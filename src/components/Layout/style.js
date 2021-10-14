import styled from 'styled-components';
import { Container } from '../../../styles/common';

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  gap: 1.875em;
  padding: 0 2rem;
  div {
    height: 30rem;
    p {
      &:first-child {
        color: #ec3200;
      }
    }
  }
`;

export const ContainerWrapper = styled(Container)`
  max-width: var(--container-width);
  margin-left: auto;
  margin-right: auto;
  padding:10px;
  @media (max-width: 768px) and (min-width: 320px) {
    padding: 0 1rem;
  }
`;

export const CardContainerWrapper = styled(Container)`
  max-width: var(--card-container-width);
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) and (min-width: 320px) {
    padding: 0 1rem;
  }
`;

export const ContentContainerWrapper = styled(ContainerWrapper)`
  /*padding: ${({ sideDistance }) => (sideDistance ? `0 ${sideDistance.toString()}px` : '0 140px')};*/
  width: 1000px;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: var(--card-gap);
  padding: ${({ padding }) => padding ?? '0'};

  /*margin: ${({ margin }) => margin || '2rem 0;'};*/
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  margin: ${({ margin }) => margin || '2rem 0;'};

  gap: var(--card-gap);
  div {
    width: 100%;
  }
`;

export const TeamMembersLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 9.375rem;
`;

export const PageWrapper = styled.div`
  /* margin-top: ${({ isHero }) => (isHero ? '0' : '10rem')}; */
  /*overflow: hidden;*/
  margin-top: ${({ marginTop }) => marginTop};
  background-color: ${({ isDark, isDarker }) =>
    isDark ? 'var(--moon-S1)' : isDarker ? 'var(--moon-B)' : 'var(--moon-L6)'};
  width: 100%;
`;

export const ContentWrapper = styled.div`
  padding: 0 2rem;
`;

export const SpacingWrapper = styled.div`
  padding-top: ${({ height }) => `${height}px`};
`;

export const OverflowHiddenWrapper = styled.div`
  overflow: hidden;
`;
