import styled from 'styled-components';
import { Container } from '../../../components/Layout';

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

export const PageWrapper = styled.div`
  background-color: #0b0d0f;
  width: 100%;
`;

export const ContainerWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1280px;
  padding: ${({ padding }) => padding ?? ' 0 2rem'};
`;
