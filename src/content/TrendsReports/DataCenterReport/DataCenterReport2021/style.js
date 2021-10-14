import styled from 'styled-components';
import { Link } from 'gatsby-plugin-intl';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

export const ImageWrapper = styled.div`
  margin-bottom: 9rem;
`;

export const CustomCardLayout = styled.div`
  width: ${({ layout }) => `calc(${layout}*100% - (1 - ${layout})*var(--card-gap) );`};
  display: flex;
  flex-direction: column;
  div {
    min-height: 0;
  }
  row-gap: 2.1875rem;
  @media (max-width: 768px) and (min-width: 320px) {
    width: 100%;
    div {
      flex-direction: column;
      min-height: auto;
      p,
      h3 {
        text-align: left;
      }
    }
  }
`;

export const ListMenu = styled.ol`
  display: block;
  padding-top: 1rem;
  line-height: 3rem;
  list-style: none;
  margin: 0;
  padding: 0;
  padding-top: 1rem;
  @media (max-width: 768px) and (min-width: 320px) {
  }
`;
export const ListItem = styled.li`
  color: #fff;
  font-size: 1.5rem;
  margin-top: 2rem;
  line-height: 3rem;
  text-align: left;
  font-weight: 400;
  position: relative;

  hr {
    border: none;
    display: block;
    height: 12px;
    margin: 0.5rem 0 0;
    max-width: 100%;
    &:first-child {
      background-color: #414d59;
      width: 336px;
    }
    &:last-child {
      background: ${({ underlineColor }) => `${underlineColor}`};
      width: ${({ chartPercent }) => chartPercent};
      position: absolute;
      bottom: 0;
      box-sizing: content-box;
    }
  }

  @media (max-width: 1068px) and (min-width: 320px) {
    font-size: 1rem;
    margin-top: 1.5rem;
    line-height: 1.5rem;
  }
`;

export const HeroContainer = styled.div`
  min-height: 100%;
  max-width: var(--hero-container-width);
  margin-left: auto;
  margin-right: auto;
  div {
    z-index: 0;
    width: 100%;
    min-height: 100%;
    &:first-child {
      position: relative;
    }
  }

  @media (max-width: 768px) and (min-width: 320px) {
    margin-bottom: -3rem;
  }
`;

export const MainTitle = styled.div`
  margin-bottom: -8rem;
  z-index: 30;
  @media screen and (min-width: 1216px) {
    margin-bottom: -8rem;
  }

  @media screen and (min-width: 1216px) {
    font-size: 2.25rem;
  }
  @media (max-width: 768px) and (min-width: 320px) {
    margin-bottom: -10rem;
  }
  h1 {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    margin-bottom: 13px;

    font-size: 2.75rem;
    line-height: 52px;
  }
`;

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
  div {
    min-height: 100%;
  }
  .gatsby-image-wrapper {
    margin: 4rem auto;
    &:first-child {
      height: 60%;
      width: 100%;
      @media (max-width: 768px) and (min-width: 320px) {
        padding-top: 70%;
      }
      @media (max-width: 1920px) and (min-width: 768px) {
        top: 2rem;
      }
    }
  }
  @media (max-width: 768px) and (min-width: 320px) {
    margin-top: -4rem;
  }
`;

export const SubnavButtons = styled(Link)`
  color: var(--text-dark);
  text-decoration: none;
  background: var(--bg-white);
  padding: 0.5rem 2rem;
  border-radius: 15px;
`;

export const JumpScrollLink = styled(AnchorLink)`
  text-decoration: none;
  color: var(--moon-L6);
  font-size: 12px;
  line-height: 22px;
  &:hover {
    color: var(--moon-L4);
  }
`;

export const MainHeaderPageTitle = styled.p`
  font-size: 24px;
  line-height: 62px;
  font-weight: 600;
`;

export const RowContainer = styled.div`
  margin: 1rem 0;
`;
