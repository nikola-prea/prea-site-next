import React, { useState, useEffect } from 'react';

import { useIntl } from 'gatsby-plugin-intl';
import { StaticImage } from 'gatsby-plugin-image';
import * as S from './style';

import i18n from '../../../../i18n';
import MoreInfoChevrolet from './vectors/MoreInfo.svg';
import AddMore from './vectors/AddMore.svg';
import { Heading, Paragraph } from '../../../../../../components';
import { Spacing } from '../../../../../../components/Layout';

const Card = ({
  key,
  subTitle,
  subTitleColor,
  title,
  description,
  hasAdditionalInfo,
  imageName,
  imageComponent,
  additionalInfoPath,
  height,
  layout,
  expandBTN,
  children,
  hasContactTeamBTN,
  overlayTitle,
  overlayDescription,
  overlayAlign,
  overlayTextColor,
  expandBg,
}) => {
  const intl = useIntl();

  const path = {
    team: 'prea/team',
    contact: 'prea/contact',
  };

  const [isCardOverlayed, setIsCardOverlayed] = useState(false);

  return (
    <S.CardWrapper
      layout={layout}
      height={height}
      titleColor={subTitleColor}
      key={key}
      overlayAlign={overlayAlign}
      isCardOverlayed={isCardOverlayed}>
      {isCardOverlayed ? '' : <S.BgOverlay />}

      {isCardOverlayed ? '' : <S.BgImage>{imageComponent || cardImagePath[imageName]}</S.BgImage>}

      <S.ContentWrapper>
        <S.SubTitle subTitleColor={subTitleColor}>{subTitle}</S.SubTitle>
        {title && isCardOverlayed === false ? (
          <S.Title>{title}</S.Title>
        ) : isCardOverlayed && overlayTitle ? (
          <S.OverlayedTitle overlayTextColor={overlayTextColor}>{overlayTitle}</S.OverlayedTitle>
        ) : (
          ''
        )}
        {description && isCardOverlayed === false ? (
          <S.Description>{description}</S.Description>
        ) : isCardOverlayed && overlayDescription ? (
          <S.OverlayedDescription overlayTextColor={overlayTextColor}>{overlayDescription}</S.OverlayedDescription>
        ) : (
          ''
        )}
        {children}
        {hasAdditionalInfo && !isCardOverlayed && (
          <S.MoreInfos href={additionalInfoPath}>
            {intl.formatMessage(i18n.additionalInfo)}
            <MoreInfoChevrolet fill="var(--brand-color)" />
          </S.MoreInfos>
        )}
        {hasContactTeamBTN && (
          <S.ButtonGroup>
            <S.Button href={path.team}>{intl.formatMessage(i18n.teamBTN)}</S.Button>
            <S.Button href={path.contact}>{intl.formatMessage(i18n.contactBTN)}</S.Button>
          </S.ButtonGroup>
        )}
      </S.ContentWrapper>
      {expandBTN && (
        <S.AddMoreWrapper isCardOverlayed={isCardOverlayed} titleColor={subTitleColor} expandBg={expandBg}>
          <AddMore onClick={() => setIsCardOverlayed(!isCardOverlayed)} />
        </S.AddMoreWrapper>
      )}
    </S.CardWrapper>
  );
};

export const CardTechnology = ({
  title,
  titleColor,
  titleWidth,
  spacing = 22,
  titleHeadingType = 3,
  titleUnit,
  description,
  image,
  imageHeight,
  imageWidth,
  height,
  mobileHeight,
  layout,
  expandBTN,
  overlayTitle,
  overlayDescription,
  overlayAlign,
  overlayTextColor,
  expandBg,
  fullBg,
  children,
  padding,
  overlayActive,
  isBerlin,
  isForm,
}) => {
  const intl = useIntl();
  const [isCardOverlayed, setIsCardOverlayed] = useState(false);
  const jumpScrollURL = `/${intl.locale}/reports-trends/data-center-report#downloadReport`;

  return (
    <S.CardTechnologyWrapper
      isForm={isForm}
      layout={layout}
      expandBTN={expandBTN}
      height={height}
      fullBg={fullBg}
      mobileHeight={mobileHeight}
      overlayAlign={overlayAlign}
      isCardOverlayed={isCardOverlayed}
      titleColor={titleColor}>
      <S.TechnologyContentWrapper
        imageWidth={imageWidth}
        isBerlin={isBerlin}
        padding={padding}
        isCardOverlayed={isCardOverlayed}
        imageHeight={imageHeight}
        fullBg={fullBg}
        // children={children}
      >
        {title && (
          /* <S.TechnologyTitle fullBg={fullBg} titleColor={titleColor} titleWidth={titleWidth}>
            {title}
          </S.TechnologyTitle> */
          <S.TechnologyTitleWrapper>
            <Heading type={titleHeadingType} isBold color={titleColor}>
              {title}
            </Heading>
            <Paragraph type={1} color={titleColor} isBold={false}>
              {titleUnit}
            </Paragraph>
          </S.TechnologyTitleWrapper>
        )}
        {description && (
          <>
            <Spacing height={spacing} />
            <Paragraph type={1} color="var(--moon-L6)" isBold={false}>
              {description}
            </Paragraph>
          </>
        )}
        {/* <S.TechnologyDescription>{description}</S.TechnologyDescription> */}
        {children}

        {image}
      </S.TechnologyContentWrapper>
      {overlayTitle && overlayDescription && (
        <S.ToggleBackground
          mobileHeight={mobileHeight}
          height={height}
          isCardOverlayed={overlayActive || isCardOverlayed}
          titleColor={titleColor}>
          <S.OverlayContentWrapper
            overlayTextColor={overlayTextColor}
            overlayAlign={overlayAlign}
            isCardOverlayed={overlayActive || isCardOverlayed}
            titleColor={titleColor}>
            <S.OverlayedTitle overlayTextColor={overlayTextColor}>{overlayTitle}</S.OverlayedTitle>
            <S.OverlayedDescription overlayTextColor={overlayTextColor}>{overlayDescription}</S.OverlayedDescription>

            <S.OverlayLink overlayTextColor={overlayTextColor} to={jumpScrollURL}>
              {intl.formatMessage(i18n.findReport)}
            </S.OverlayLink>
          </S.OverlayContentWrapper>
        </S.ToggleBackground>
      )}

      {expandBTN && (
        <S.TechnologyAddMoreWrapper isCardOverlayed={isCardOverlayed} titleColor={titleColor} expandBg={expandBg}>
          <AddMore onClick={() => setIsCardOverlayed(!isCardOverlayed)} />
        </S.TechnologyAddMoreWrapper>
      )}
    </S.CardTechnologyWrapper>
  );
};

export const RowCard = ({ layout, height, title, titleColor, image }) => (
  <S.RowCardWrapper image={image} layout={layout} height={height}>
    <S.RowContentWrapper>
      <S.RowImageWrapper>{image}</S.RowImageWrapper>
      <Heading type={4} isBold={false} color="var(--earth-L1)">
        {title}
      </Heading>
    </S.RowContentWrapper>
  </S.RowCardWrapper>
);

export default Card;
