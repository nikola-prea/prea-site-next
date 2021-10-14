import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 59px 140px 57px 140px;
  svg {
    cursor: pointer;
  }
`;

export const FilterWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
`;

export const SwitcherWrapper = styled.div`
  display: flex;
  column-gap: 1.9375rem;
  margin-right: 5.020625rem;
`;

export const OverlayWrapper = styled.div`
  margin: 1.1875rem 0 1.8125rem 0;
  background: var(--moon-S1);
  height: 480px;
  border-radius: 0.625rem;
  padding: 2.4375rem 3.125rem 3.5625rem 3.125rem;
`;

export const OverlayContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  svg {
    cursor: pointer;
  }
`;

export const RemoveFilter = styled.p`
  color: var(--love-M);
  display: flex;
  text-align: right;
  cursor: pointer;
  font-size: 14px;
  line-height: 24px;
  transition: all ease-in-out 0.3s;
  &:hover {
    color: var(--love-D4);
  }
`;
