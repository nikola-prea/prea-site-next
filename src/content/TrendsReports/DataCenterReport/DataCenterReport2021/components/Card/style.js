import styled, { keyframes } from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Container } from '../../../../../../../style/common';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1.875rem;
  overflow: hidden;
  justify-content: space-between;
  position: relative;
  min-height: ${({ height }) => (height ? `${height}rem` : '40rem')};
  text-align: ${({ overlayAlign }) => overlayAlign || 'none'};
  width: ${({ layout }) => `calc(${layout}*100% - (1 - ${layout})*var(--card-gap) );`};

  z-index: 5;

  @media (max-width: 1068px) and (min-width: 768px) {
    font-size: 1rem;
    min-height: 26rem;
    width: ${({ layout }) =>
      layout === 1 / 3 || layout === 2 / 3
        ? `calc(${0.5}*100% - (1 - ${0.5})*var(--card-gap) );`
        : `calc(${layout}*100% - (1 - ${layout})*var(--card-gap) );`};
  }

  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 0.875rem;
    min-height: 100%;
    width: 100%;
  }
`;

export const ToggleBackground = styled.div`
  background: ${({ isCardOverlayed, titleColor }) => isCardOverlayed && titleColor};
  opacity: ${({ isCardOverlayed }) => (isCardOverlayed ? '1' : '0')};
  height: 100%;
  transition: height 0s linear 0.4s, opacity 0.4s linear 0s;
  top: 0;
  left: 0;
  position: absolute;

  width: 100%;
`;

const BgOverlay = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 78.63%, rgba(255, 255, 255, 0) 90.11%);
  z-index: 5;
  width: 100%;
  overflow: hidden;
  min-height: 50%;
  position: absolute;
  border-radius: 1.875rem;
`;

const BgImage = styled.div`
  position: absolute;
  overflow: hidden;
  border-radius: 1.875rem;
  height: 100%;
  top: 0;
  width: 100%;
  z-index: 0;
  div {
    width: 100vw;
    min-height: 100%;
    border-radius: 1.875rem;
    /* min-height: 0; before not set */
  }
`;
const ContentWrapper = styled.div`
  text-align: left;
  padding: 2.5rem 3rem;
  z-index: 5;
  @media (max-width: 1024px) and (min-width: 320px) {
    padding: 1.25rem 1.5rem;
    margin-top: 0.625rem;
  }
`;

const SubTitle = styled.p`
  font-size: 1.188rem;
  color: ${({ subTitleColor }) =>
    subTitleColor === 'r' ? 'var(--red)' : subTitleColor === 'g' ? 'var(--green)' : 'var(--blue)'};
  font-weight: bold;
  padding-bottom: 0.5rem;
  margin: 0;
  @media (max-width: 1024px) and (min-width: 320px) {
    font-size: 1.188rem;
  }
`;
const Title = styled.h3`
  margin: 0;
  font-size: 3rem;
  padding-bottom: 1.313rem;
  color: #212121;
`;
const Description = styled.p`
  display: block;
  margin: 0;
  color: #212121;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 36px;
  margin-block-start: 1rem;
  margin-top: 1rem;
  @media (max-width: 1024px) and (min-width: 320px) {
    font-size: 1.125rem;
  }
`;

const MoreInfos = styled.a`
  margin-top: 1.313rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.313rem;
  text-decoration: none;
  color: #212121;

  svg {
    margin-left: 0.813rem;
  }

  @media (max-width: 1024px) and (min-width: 320px) {
    font-size: 0.875rem;
    margin-top: 0.625rem;
  }
`;

const AddMoreWrapper = styled.a`
  display: flex;
  cursor: pointer;
  z-index: 10;
  justify-content: flex-end;
  padding-right: 1rem;
  padding-bottom: 1rem;
  svg {
    cursor: pointer;
    transition: transform 400ms linear 0s;
    transform: ${({ isCardOverlayed }) => (isCardOverlayed ? 'rotate(45deg)' : 'none')};
    line {
      stroke: ${({ titleColor }) =>
        titleColor === 'b' ? '#1D79DD' : titleColor === 'r' ? '#EC3200' : titleColor === 'g' ? '#0B9E43' : '#222224'};
      line-height: normal;
    }
    circle {
      fill: ${({ expandBg }) => expandBg};
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 2rem;
  @media (max-width: 1024px) and (min-width: 320px) {
    flex-direction: column;
    margin-top: 0;
  }
`;

const Button = styled.a`
  border-radius: 50px;
  text-align: center;
  width: 12.5rem;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  background-color: var(--blue);
  border-radius: 50px;
  margin-right: 1.875rem;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  color: white;
  width: 100%;
  font-size: 1.063rem;

  @media (max-width: 1024px) and (min-width: 320px) {
    margin-right: 0;
    margin-top: 1.875rem;
    padding: 0.5rem 1rem;

    &:last-child {
      margin-top: 1rem;
    }
  }
`;

export const CardTechnologyWrapper = styled(CardWrapper)`
  background: #161a1e;
  border-radius: 10px;
  text-align: ${({ overlayAlign }) => overlayAlign || 'none'};
  min-height: ${({ height }) => height};

  .gatsby-image-wrapper {
    margin: 0 auto;
    position: ${({ fullBg }) => fullBg && 'absolute'};
    overflow: ${({ fullBg }) => fullBg && 'hidden'};
    border-radius: ${({ fullBg }) => fullBg && '10px'};
    height: ${({ fullBg }) => fullBg && '100%'};
    top: ${({ fullBg }) => fullBg && '0'};
    width: ${({ fullBg }) => (fullBg ? '100%' : '70%')};
    z-index: ${({ fullBg }) => fullBg && '-1000'};
  }
  @media (max-width: 768px) and (min-width: 0px) {
    min-height: ${({ mobileHeight }) => mobileHeight || '12.5rem'};
    min-height: ${({ fullBg }) => !fullBg && '100%'};
    text-align: center;
    padding: ${({ fullBg }) => (fullBg ? '0' : '2.5rem 1.5rem 1.5rem 2rem')};
    padding: ${({ isCardOverlayed }) => isCardOverlayed && '0'};
  }
`;

export const TechnologyContentWrapper = styled.div`
  padding: ${({ fullBg }) => (fullBg ? '0' : '5.375rem 3.0625rem')};
  padding: ${({ padding }) => padding};
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ isCardOverlayed, isBerlin }) => (isCardOverlayed || isBerlin ? 'center' : 'flex-start')};
  justify-content: ${({ isCardOverlayed, isBerlin }) => (isCardOverlayed || isBerlin ? 'center' : 'flex-end')};
  font-weight: 400;
  line-height: 1.5;
  color: #222224;
  font-size: 1.2rem;
  width: 100%;
  svg {
    max-width: ${({ imageWidth }) => imageWidth || '100%'};
    @media (max-width: 1068px) and (min-width: 768px) {
      max-width: 100%;
    }
    @media (max-width: 768px) and (min-width: 320px) {
      max-width: 100%;
    }
  }
  @media (max-width: 768px) and (min-width: 0px) {
    padding: 0;
  }
`;

export const TechnologyTitleWrapper = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: flex-end;
`;

export const TechnologyTitle = styled(Title)`
  padding: ${({ fullBg }) => (fullBg ? '5.375rem 3.0625rem' : '0')};
  color: ${({ titleColor }) => `${titleColor}`};
  z-index: 50;
  width: ${({ titleWidth }) => (titleWidth ? `${titleWidth}` : '100%')};
  font-size: 3rem !important;
  font-weight: 600 !important;

  @media (max-width: 1068px) and (min-width: 320px) {
    margin: 0;
    width: 100%;
    padding: 0 !important;
    font-size: 2rem !important;
    font-weight: 600 !important;
    text-align: left;
  }
`;
export const TechnologyDescription = styled(Description)`
  color: #e0e0e1;
  font-size: 1.5rem;
  font-weight: normal;
  width: 100%;
  margin-top: 1rem;

  @media (max-width: 1068px) and (min-width: 320px) {
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    text-align: left;
  }
`;
export const TechnologyAddMoreWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 3000;
  justify-content: flex-end;
  padding-right: 42px;
  padding-bottom: 42px;
  svg {
    cursor: pointer;
    transition: transform 400ms linear 0s;
    transform: ${({ isCardOverlayed }) => (isCardOverlayed ? 'rotate(45deg)' : 'none')};
    line {
      stroke: var(--moon-L6);
      line-height: normal;
    }
    circle {
      fill: ${({ expandBg }) => expandBg};
    }
  }
`;

export const OverlayBoxForAnimation = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

export const RowCardWrapper = styled(CardTechnologyWrapper)`
  padding: 56px 50px;
  border-radius: var(--card-radius);
  text-align: left;
  min-height: 420px;

  /* h3 {
    font-size: 3rem;
    width: 100%;
    text-align: center;
    letter-spacing: -0.01em;
    line-height: 1.05;
    font-weight: 400;
    @media (max-width: 1068px) and (min-width: 320px) {
      font-size: 2rem;
    }
    @media (max-width: 2068px) and (min-width: 320px) {
      text-align: left;
    }
  }*/
`;

export const RowContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 1190px) and (min-width: 0px) {
    justify-content: flex-end;
    flex-direction: column;
  }
`;
export const RowImageWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 22px;

  @media (max-width: 768px) and (min-width: 0px) {
    padding: 0 0 1.5rem 0;
    .gatsby-image-wrapper {
      z-index: 20;
      width: 4.6875rem !important;
      height: 4.6875rem !important;
    }
  }
`;

export const RowTitle = styled(TechnologyTitle)`
  font-weight: 400 !important;
  @media (max-width: 768px) and (min-width: 320px) {
    text-align: center !important;
  }
`;

export const OverlayContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: ${({ overlayAlign }) => overlayAlign};
  justify-content: center;
  padding: 0 1.5rem;
  padding-top: 1.7rem;
  padding-bottom: 1.7rem;
  color: ${({ overlayTextColor }) => overlayTextColor} !important;
  min-height: 100%;
  background: ${({ titleColor }) => titleColor};
`;

export const OverlayedTitle = styled.p`
  margin: 0 auto !important;
  line-height: 1.5;
  font-size: 1.5rem;
  max-width: 100%;
  margin: 0;
  width: 580px;
  font-weight: 600;
  z-index: 1000;
  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 1rem;
  }
`;
export const OverlayedDescription = styled.p`
  margin: 0 auto;
  line-height: 1.5;
  font-weight: 400;
  font-size: 1.5rem;
  max-width: 100%;
  width: 580px;
  margin-top: 2rem;
  z-index: 1000;
  @media (max-width: 768px) and (min-width: 320px) {
    font-size: 1rem;
  }
`;

export const OverlayLink = styled(AnchorLink)`
  text-decoration: none;
  margin: 0 auto;
  font-size: 1rem;
  max-width: 100%;
  width: 580px;
  margin-top: 2rem;

  color: ${({ overlayTextColor }) => (overlayTextColor ? `${overlayTextColor} !important` : '#fff !important')};
`;

export {
  CardWrapper,
  SubTitle,
  Title,
  BgImage,
  BgOverlay,
  Description,
  MoreInfos,
  ContentWrapper,
  AddMoreWrapper,
  ButtonGroup,
  Button,
};
