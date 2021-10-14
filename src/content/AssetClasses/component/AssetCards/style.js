import styled from 'styled-components';
import { Row } from '../../../../components/Layout';

export const FourTimesFourWrapper = styled.div`
  width: 1200px;
`;

export const AssetRow = styled(Row)`
  gap: 24px;
  margin: 0;
`;

export const CardsWrapper = styled.div`
  padding: ${({ padding }) => padding ?? '0 40px'};
  display: flex;
  align-items: center;
  justify-content: center;
`;
