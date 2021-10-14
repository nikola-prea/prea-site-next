import styled from 'styled-components';

export const PageWrapper = styled.div`
  background-color: #0b0d0f;
  width: 100%;
`;

export const Header = styled.div`
  min-height: 1320px;
  position: relative;
  align-items: center;
`;

export const WrapperHeaderImage = styled.div`
  height: 2600px;
  width: 100%;
  position: relative;
  .gatsby-image-wrapper {
    height: 100%;
  }
`;

export const HeaderContentWrapper = styled.div`
  text-align: center;
  position: absolute;
  top: 13%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FirstHeaderDescription = styled.div`
  position: absolute;
  text-align: center;
  width: 645px;
  top: 63%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SecondHeaderDescription = styled.div`
  position: absolute;
  text-align: center;
  width: 645px;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  max-width: 556px;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    text-align: center;
  }
`;
