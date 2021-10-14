import styled from 'styled-components';
import { Container } from '../../../../../../../style/common';

const TitleWrapper = styled.div`
  margin-top: 5.625rem;
  margin-bottom: 1.875rem;
  display: flex;
  justify-content: center;
  max-width: 100vw;
  z-index: 30;
`;

export const MainWrapper = styled.div`
  font-weight: 400;
  line-height: 1.5;
  font-size: 1.2rem;
  align-items: center;
  color: #e0e0e1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8rem 1rem 0;
  position: relative;
  text-align: center;
  z-index: 30;
  margin-bottom: -8rem;

  @media (max-width: 1068px) and (min-width: 786px) {
    margin-bottom: -4rem;
  }
`;

export const MainTitle = styled.h1`
  text-align: center;

  margin: 0;
  padding: 0;
  line-height: 4.1875rem !important;
  margin-bottom: 1.05rem;
  color: #e0e0e1;
  max-width: 100%;
  width: 1060px;

  p {
    margin: 0;
    font-weight: 600;
    font-size: 3.5rem;
  }

  @media (max-width: 1068px) and (min-width: 320px) {
    font-size: 2.75rem;
    font-weight: 600;
  }
`;
export const MainDescription = styled.p`
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  margin: 0;
  padding: 0;
  color: #e0e0e1;
  max-width: 100%;
  width: 650px;
  margin-top: 2rem;
  font-size: 1.5rem;
  text-size-adjust: 100%;
  p {
    margin: 0;
  }
  @media (max-width: 1068px) and (min-width: 320px) {
    font-size: 1.25rem;
    margin-top: 2rem;
  }
`;

const HeadingTwo = styled.h2`
  color: ${({ textColor }) => (textColor === 'r' ? 'var(--red)' : textColor === 'b' ? 'var(--blue)' : 'var(--green)')};
  font-size: 4.5rem;
  min-height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  z-index: 30;
`;

export const TitleDescriptionWrapper = styled.div`
  text-align: ${({ tag }) => (tag ? 'left' : 'center')};
  z-index: 30;
  text-align: ${({ align }) => align};
  display: flex;
  flex-direction: row;
  justify-content: ${({ isReport }) => (isReport ? 'center' : 'flex-start')};
  align-items: center;
  width: 100%;

  @media (max-width: 768px) and (min-width: 320px) {
    padding: 1.5rem 1.5rem 1.5rem 2rem;
  }
`;

export const TitleDescriptionContentWrapper = styled.div`
  width: 640px;
  @media (max-width: 1068px) and (min-width: 0px) {
    width: 100%;
  }
`;

export const Tag = styled.h3`
  color: ${({ tagColor }) => tagColor};
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

export const TitleUTP = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: #e0e0e1;
  margin: 0;
  margin-top: 2rem;
  padding: 0;

  p {
    margin: 0;
  }

  @media (max-width: 1068px) and (min-width: 320px) {
    font-size: 2rem;
    margin-top: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 24px;
  font-weight: 400;
  max-width: 100%;
  width: ${({ descriptionWidth }) => descriptionWidth || '37rem'};
  color: var(--moon-L6);
  line-height: 34px;
  p {
    margin: 0;
  }
  /*@media (max-width: 1068px) and (min-width: 320px) {
    font-size: 1rem;
    margin-top: 1rem;
    font-weight: 400;
    line-height: 24px;
  }*/
`;

export { HeadingTwo, TitleWrapper };
