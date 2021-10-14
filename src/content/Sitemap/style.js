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

export const SectionWrapper = styled.div`
  flex-basis: 33%;
`;

export const CustomHeading = styled.div`
  padding-top: 110px;
  padding-bottom: 82px;
  padding-left: 100px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 40px;
  height: 100%;
`;

export const PageWrapper = styled.div`
  background-color: var(--moon-L6);
  width: 100%;
  padding-top: ${({ marginTop }) => `${marginTop}rem`};
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: var(--moon-D6);
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: 'var(--footer-bg)';
  width: 1280px;
  padding: ${({ padding }) => padding ?? ' 0 8rem'};
  height: 100%;
`;
