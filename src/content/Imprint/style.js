import styled from 'styled-components';
import { Container } from '../../components/Layout';

export const MainHero = styled.div`
  align-items: center;
  background-color: black;
  box-shadow: 0px 20px 20px 5px #000000;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 56px);
  overflow: hidden;
  text-align: center;
  width: 100vw;
  .gatsby-image-wrapper {
    margin: 4rem auto;
    &:first-child {
      height: 60%;
      width: 100%;
    }
  }
`;

export const SectionWrapper = styled.div``;

export const SkyParagraph = styled.p`
  font-size: 24px;
  line-height: 34px;
  color: var(--sky-M);
  margin: 0;
`;

export const SkySpan = styled.span`
  font-size: 24px;
  line-height: 34px;
  color: var(--sky-M);
`;

export const CustomHeading = styled.div`
  padding-top: 110px;
  padding-bottom: 82px;
  text-align: left;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
  row-gap: 2rem;
`;

export const PageWrapper = styled.div`
  background-color: var(--moon-L6);
  width: 100%;
  padding-top: ${({ marginTop }) => `${marginTop}rem`};
`;

export const MainContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const MainContainerContent = styled.div`
  max-width: 840px;
`;
