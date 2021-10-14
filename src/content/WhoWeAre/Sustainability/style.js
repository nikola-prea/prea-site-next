import styled from 'styled-components';
import { Container } from '../../../../style/common';

export const ContainerWrapper = styled(Container)`
  align-items: center;
  padding: 0px 40px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1280px;
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

export const HeaderWrapper = styled.div`
  position: relative;
`;

export const HeaderTitle = styled.div`
  position: absolute;
  bottom: 20%;
  left: 14%;
  z-index: 1;
`;
