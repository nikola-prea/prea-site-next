import styled from 'styled-components';
import { Container } from '../../../../style/common';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1280px;
`;

export const ContainerWrapper = styled(Container)`
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  position: relative;
  div > h1 {
    color: transparent;
  }
  div > div > h1 {
    color: transparent;
  }
`;

export const HeaderTitle = styled.div`
  position: absolute;
  width: 550px;
  bottom: 20%;
  left: 14%;
  z-index: 1;
`;

export const TitleWrapper = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify === 'left' ? 'flex-start' : 'center')};
  align-items: ${({ justify }) => (justify === 'left' ? 'flex-start' : 'center')};

  p,
  h3 {
    width: 840px;
  }
`;

export const HighlightBold = styled.span`
  color: var(--moon_L6);
  font-weight: bold;
`;
