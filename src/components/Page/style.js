import styled from 'styled-components';
import { Container, Row } from '../../../styles/common';

const SiteContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
  overflow: ${({ hidden }) => hidden && 'hidden'};
  min-height: 100vh;
  background-color: #f5f5f7;
`;

const HeaderRow = styled(Row)`
  justify-content: center;
  flex-direction: ${({ flexDirection }) => flexDirection};
`;

const MainRow = styled(Row)`
  /*overflow: hidden;*/
  background-color: ${({ bgColor }) => bgColor};
  justify-content: center;
  flex-direction: column;
  flex: 1;
`;

const FooterRow = styled(Row)`
  justify-content: center;
  min-height: 3rem;
  background: ${({ bgColor }) => bgColor || 'var(--footer-bg)'};
`;

export const MobileFooterRow = styled(FooterRow)`
  margin-bottom: 5.5rem;
`;

const MobileFooterHeaderRow = styled(FooterRow)`
  /* 	&::before {
		content: ' ';
		bottom: 3.5rem;
		width: 100vw;
		min-height: 100px;
		position: fixed;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.6);
	} */
`;

export { SiteContainer, HeaderRow, MainRow, FooterRow, MobileFooterHeaderRow };
