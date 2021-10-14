import styled from 'styled-components';
import { Link } from 'gatsby-plugin-intl';
import { Container } from '../../../style/common';

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

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 840px;
  align-items: center;
`;
export const ContentWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const PageWrapper = styled.div`
  background-color: var(--moon-L6);
  width: 100%;
  padding-top: ${({ marginTop }) => `${marginTop}rem`};
`;
