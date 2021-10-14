import styled from 'styled-components';

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

export const CustomHeading = styled.div`
  padding-top: 110px;
  padding-bottom: 82px;

  h2 {
    margin-bottom: 42px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const PageWrapper = styled.div`
  background-color: var(--moon-L6);
  width: 100%;
  padding-top: ${({ marginTop }) => `${marginTop}rem`};
`;

export const ContainerWrapper = styled.div`
  max-width: 840px;
  margin-left: auto;
  margin-right: auto;
`;
