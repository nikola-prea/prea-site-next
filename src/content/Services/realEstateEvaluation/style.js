import styled from 'styled-components';
import { Link } from 'gatsby-plugin-intl';

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

export const PageWrapper = styled.div`
  background-color: #0b0d0f;
  width: 100%;
`;

export const TeaserWithCurvedLine = styled.div`
  background-color: var(--moon-B);
  display: flex;
  width: 1280px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0px;
`;
