import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import MorePostByCategory from '../../../components/Modules/MorePostByCategory/MorePostByCategory';
import { PageLayout, Spacing, Container } from '../../../components/Layout';
import HeaderImage from '../../../components/Modules/Header/HeaderImage';
import SubHeader from '../../../components/Modules/SubHeader/SubHeader';
import ServiceCards from '../../AssetClasses/component/ServiceCards';
import { TeaserReadMore } from '../../../components/Modules/Teaser';
import { Heading, Paragraph } from '../../../components';
import query from './query';
import * as S from './style';
import i18n from '../i18n';

export default function MercuryOverview() {
  const intl = useIntl();
  const {
    header,
    teaserOneFirstImg,
    teaserOneSecondImg,
    teaserOneThirdImg,
    teaserTwoFirstImg,
    teaserTwoSecondImg,
    teaserTwoThirdImg,
    teaserThreeFirstImage,
    teaserThreeSecondImage,
    teaserFourFirstImg,
    teaserFourSecondImg,
    teaserFourThirdImg,
    teaserFiveFirstImg,
  } = query();

  return (
    <PageLayout isDarker>
      <SubHeader type={1} brand="mercury" top="0rem" />
      <S.HeaderWrapper>
        <HeaderImage
          isDark
          type={2}
          transparent={true}
          image={<GatsbyImage image={getImage(header)} alt={intl.formatMessage(i18n.mercuryHeaderTitle)} />}
          title="mercury"
        />
        <S.HeaderTitle>
          <Paragraph color="var(--sun-M)">{intl.formatMessage(i18n.mercuryHeaderTitle)}</Paragraph>
          <Spacing height={24} />

          <Heading type={2} color="var(--moon-L6)">
            {intl.formatMessage(i18n.mercuryHeaderDescription)}
          </Heading>
        </S.HeaderTitle>
      </S.HeaderWrapper>
      <Spacing height={140} />
      <S.ContainerWrapper>
        <S.ContentContainer>
          <S.TitleWrapper>
            <Paragraph color="var(--moon-L6)">{intl.formatMessage(i18n.mercuryFirstParagraph)}</Paragraph>
          </S.TitleWrapper>
          <Spacing height={100} />

          <Container padding="0">
            <TeaserReadMore
              bgImage={teaserOneFirstImg}
              isDark
              height="620px"
              imagePos="right"
              tag={intl.formatMessage(i18n.spillover)}
              tagColor="var(--sun-M)"
              title={intl.formatMessage(i18n.spilloverTitle)}
              description={
                <>
                  <S.HighlightBold>{intl.formatMessage(i18n.spilloverDescriptionFirstPart)}</S.HighlightBold>
                  {intl.formatMessage(i18n.spilloverDescriptionSecondPart)}
                </>
              }
            />
            <Spacing height={60} />
            <TeaserReadMore
              bgImage={teaserTwoFirstImg}
              isDark
              height="620px"
              imagePos="right"
              tag={intl.formatMessage(i18n.clustering)}
              tagColor="var(--sun-M)"
              title={intl.formatMessage(i18n.clusteringTitle)}
              description={
                <>
                  <S.HighlightBold>{intl.formatMessage(i18n.clusteringDescriptionFirstPart)}</S.HighlightBold>
                  {intl.formatMessage(i18n.clusteringDescriptionSecondPart)}
                </>
              }
            />

            <Spacing height={60} />
            <TeaserReadMore
              bgImage={teaserThreeFirstImage}
              isDark
              height="620px"
              imagePos="right"
              tag={intl.formatMessage(i18n.dvwap)}
              tagColor="var(--sun-M)"
              title={intl.formatMessage(i18n.dvwapTitle)}
              description={
                <>
                  <S.HighlightBold>{intl.formatMessage(i18n.dvwapDescriptionFirstPart)}</S.HighlightBold>
                  {intl.formatMessage(i18n.dvwapDescriptionSecondPart)}
                </>
              }
            />
            <Spacing height={60} />

            <TeaserReadMore
              withCarousel={true}
              images={[teaserFourFirstImg, teaserFourSecondImg, teaserFourThirdImg]}
              isDark
              height="620px"
              imagePos="right"
              tag={intl.formatMessage(i18n.forecasting)}
              tagColor="var(--sun-M)"
              title={intl.formatMessage(i18n.forecastingTitle)}
              description={
                <>
                  <S.HighlightBold>{intl.formatMessage(i18n.forecastingDescriptionFirstPart)}</S.HighlightBold>
                  {intl.formatMessage(i18n.forecastingDescriptionSecondPart)}
                </>
              }
            />
            <Spacing height={100} />
            <TeaserReadMore
              withFrame={true}
              bgImage={teaserFiveFirstImg}
              height="620px"
              imagePos="right"
              tag={intl.formatMessage(i18n.mercury_valuationName)}
              tagColor="var(--moon-D6)"
              titleColor="var(--moon-D6)"
              title={intl.formatMessage(i18n.mercury_valuationTitle)}
              description={intl.formatMessage(i18n.mercury_valuationDescription)}
              readMore={{ name: intl.formatMessage(i18n.mercury_valuationLink), path: '/' }}
            />
          </Container>
          <Spacing height={100} />
          {/* TODO id of cases is missing, I need to check with the stakeholder */}
          <Container>
            <MorePostByCategory
              isDark
              link={{ name: intl.formatMessage(i18n.referencesBlockLink), path: 'technologies/mercury' }}
              categoryId={77}
              padding="0 120px"
              categoryObj={{ name: intl.formatMessage(i18n.referencesBlockName) }}
              headingColor="var(--moon-L6)"
            />
            <MorePostByCategory
              isDark
              link={{ name: intl.formatMessage(i18n.whitepaperBlockLink), path: 'technologies/mercury' }}
              categoryId={77}
              padding="0 120px"
              categoryObj={{ name: intl.formatMessage(i18n.whitepaperBlockName) }}
              headingColor="var(--moon-L6)"
            />
          </Container>
          <S.TitleWrapper justify="left">
            <Heading type={2} color="var(--moon-L6)">
              {intl.formatMessage(i18n.mercury_sectionHeadline)}
            </Heading>
            <Spacing height={42} />
            <Paragraph color="var(--moon-L6)">{intl.formatMessage(i18n.mercury_sectionParagraph)}</Paragraph>
          </S.TitleWrapper>
          <Spacing height={60} />
          <ServiceCards height={220} isDark />

          <Spacing height={160} />
        </S.ContentContainer>
      </S.ContainerWrapper>
    </PageLayout>
  );
}
