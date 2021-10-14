import React, { useState, useEffect } from 'react';
import * as S from './style';
import { Heading, Paragraph } from '../../../../../../components/Atoms';
import { Spacing } from '../../../../../../components/Layout';

export const Title = ({ textColor, title }) => (
  <S.TitleWrapper>
    <S.HeadingTwo textColor={textColor}>{title}</S.HeadingTwo>
  </S.TitleWrapper>
);

export const MainTitleDescription = ({
  isReport,
  align,
  textColor,
  tag,
  tagColor,
  title,
  description,
  descriptionWidth,
  titleBreak,
}) => (
  <S.MainWrapper tag={tag} isReport={isReport} align={align}>
    <S.MainTitle textColor={textColor} isReport={isReport}>
      {title}
    </S.MainTitle>
    <S.MainDescription isReport={isReport} descriptionWidth={descriptionWidth}>
      {description}
    </S.MainDescription>
  </S.MainWrapper>
);

export const TitleDescription = ({
  isReport,
  align,
  textColor,
  tag,
  tagColor,
  title,
  description,
  descriptionWidth,
}) => (
  <S.TitleDescriptionWrapper tag={tag} isReport={isReport} align={align}>
    <S.TitleDescriptionContentWrapper isReport={isReport}>
      <Paragraph color={tagColor} isBold type={1}>
        {tag}
      </Paragraph>
      <Spacing height={33} />
      <Heading type={3}>{title}</Heading>
      <Spacing height={42} />
      <S.Description isReport={isReport} descriptionWidth={descriptionWidth}>
        {description}
      </S.Description>
    </S.TitleDescriptionContentWrapper>
    <Spacing height={60} />
  </S.TitleDescriptionWrapper>
);
