import styled from 'styled-components';

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify === 'left' ? 'flex-start' : 'center')};
  align-items: ${({ justify }) => (justify === 'left' ? 'flex-start' : 'center')};

  p,
  h3,
  h2,
  h6 {
    padding-left: ${({ paddingLeft }) => paddingLeft};
    text-align: ${({ content }) => content};
  }
`;

export const HeaderWrapper = styled.div`
  h1 {
    color: transparent;
  }
`;

export const ContentWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1280px;
  padding: ${({ padding }) => padding ?? ' 0 2rem'};
`;
