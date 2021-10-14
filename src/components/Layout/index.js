// import { Media } from 'gatsby-plugin-fresnel';
import React from 'react';
import * as S from './style.js';

export const Container = ({ children, padding }) => (
  <S.ContainerWrapper padding={padding}>{children}</S.ContainerWrapper>
);

export const CardContainer = ({ children, padding }) => (
  <S.CardContainerWrapper padding={padding}>{children}</S.CardContainerWrapper>
);

export const ContentContainer = ({ children, sideDistance }) => (
  <S.ContentContainerWrapper sideDistance={sideDistance}>{children}</S.ContentContainerWrapper>
);

export const Row = ({ children, margin, padding }) => (
  <>
      <S.RowWrapper padding={padding} margin={margin}>
        {children}
      </S.RowWrapper>
    {/* <Media greaterThanOrEqual="md">
    </Media> */}
      <S.ColumnWrapper margin={margin}>{children}</S.ColumnWrapper>
    {/* <Media lessThan="md">
    </Media> */}
  </>
);
export const Column = ({ children }) => (
  <>
    <S.ColumnWrapper>{children}</S.ColumnWrapper>
  </>
);

export const PageLayout = ({ isDarker, isDark, isHeaderImage, children, marginTop }) => (
  <S.PageWrapper isDark={isDark} isDarker={isDarker} marginTop={`${marginTop}rem`} isHeaderImage={isHeaderImage}>
    {children}
  </S.PageWrapper>
);

export const ContentLayout = ({ children }) => (
  <>
    <S.ContentWrapper>{children}</S.ContentWrapper>
  </>
);

export const Spacing = ({ height }) => <S.SpacingWrapper height={height} />;

export const OverflowHiddenWrapper = ({ children }) => <S.OverflowHiddenWrapper>{children}</S.OverflowHiddenWrapper>;
