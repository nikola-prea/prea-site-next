import styled from 'styled-components';
import { Container, Row } from '../../../../style/common';

export const TitleWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  p {
    position: absolute;
    top: 7.5rem;
  }
  h2 {
    position: absolute;
    top: 12.3rem;
  }
`;

export const ComplianceFirstBlock = styled(Row)`
  display: flex;
  max-width: 1200px;
  justify-content: center;
  position: relative;
`;

export const ComplianceSecondBlock = styled(Row)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
`;
export const SecondContent = styled.div`
  padding: 100px 0;
  width: 100%;
`;

export const ComplianceBlockContainer = styled.div`
  width: 35%;
  top: 50%;
  left: 5%;
  position: absolute;
`;
export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 50px;
  width: 100%;
`;
export const DropdownMenuContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  p {
    padding: 20px 0px;
  }

  svg {
    transform: ${({ rotate }) => rotate};
    overflow: hidden;
    transition: all 0.8s ease-out;
  }
`;

export const DownloadLink = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const DownloadTextLink = styled.p`
  position: absolute;
  top: 5.3rem;
  z-index: 2;
  color: var(--link-color);
  font-family: Inter;
  font-size: 24px;
  line-height: 34px;
  text-decoration: underline;
`;

export const MainTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p,
  h2,
  h3 {
    width: 840px;
  }
`;

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
export const HeadingHighlight = styled.span`
  color: #a66ea2;
`;
