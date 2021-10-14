import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ContentContainer, OverflowHiddenWrapper, PageLayout, Spacing } from '../../../components/Layout';
import MorePostByCategory from '../../../components/Modules/MorePostByCategory/MorePostByCategory';
import ListHeadingsWithImages from '../../../components/Modules/ListHeadingsWithImages';
import SubHeader from '../../../components/Modules/SubHeader/SubHeader';
import HeaderImage from '../../../components/Modules/Header/HeaderImage';
import ServiceCards from '../../AssetClasses/component/ServiceCards';
import { TeaserReadMore } from '../../../components/Modules/Teaser';
import { ContainerWrapper } from '../realEstateTransaction/style';
import AssetCards from '../../AssetClasses/component/AssetCards';
import { Summary } from '../../../components/Modules/Summary';
import { Heading, Paragraph } from '../../../components';
import * as S from '../../AssetClasses/buildingLand/style';
import Quote from '../../../components/Modules/Quote';
import { ImageTextWrapper } from './style';
import i18n from '../i18n';
import query from './query';

const RealEstateDevelopmentOverview = () => {
  const intl = useIntl();
  const { header, teaserOneImage, teaserTwoImage, imageWithText_de, imageWithText_en } = query();

  return (
    <PageLayout isDark={false}>
      <SubHeader type={1} brand="Real Estate Development" top="0rem" comingFrom="Real Estate Development" />
      <OverflowHiddenWrapper>
        <HeaderImage
          color="var(--moon-S2)"
          isDark
          type={1}
          image={<GatsbyImage image={getImage(header)} alt={i18n.header} />}
          title={intl.formatMessage(i18n.realEstateDevelopment_headerTitle)}
          subTitle={intl.formatMessage(i18n.realEstateDevelopment_headerSubTitle)}
        />
        <ContainerWrapper>
          <Spacing height={100} />
          <Quote quote={intl.formatMessage(i18n.realEstateDevelopment_Quote)} />
          <Spacing height={140} />
          <Summary
            color="var(--paragraph-color)"
            isBold={true}
            summaryFirstParagraph={intl.formatMessage(i18n.realEstateDevelopment_SummaryTitle)}
            summaryHeadline={intl.formatMessage(i18n.realEstateDevelopment_HeadlineSummary)}
            summarySecondParagraph={intl.formatMessage(i18n.realEstateDevelopment_DescriptionSummary)}
          />
          <Spacing height={60} />
          <Quote
            headlineQuote={intl.formatMessage(i18n.realEstateDevelopment_firstSectionTitle)}
            quote={intl.formatMessage(i18n.realEstateDevelopment_firstSectionSubTitle)}
          />
          <Spacing height={100} />
          <Quote
            headlineQuote={intl.formatMessage(i18n.realEstateDevelopment_secondSectionTitle)}
            quote={intl.formatMessage(i18n.realEstateDevelopment_secondSectionSubTitle)}
          />
          <Spacing height={100} />
          <Quote
            headlineQuote={intl.formatMessage(i18n.realEstateDevelopment_thirdSectionTitle)}
            quote={intl.formatMessage(i18n.realEstateDevelopment_thirdSectionSubTitle)}
          />
          <Spacing height={140} />
          <Summary
            color="var(--paragraph-color)"
            isBold={true}
            summaryFirstParagraph={intl.formatMessage(i18n.realEstateDevelopment_Second_SummaryTitle)}
            summaryHeadline={intl.formatMessage(i18n.realEstateDevelopment_Second_HeadlineSummary)}
            summarySecondParagraph={intl.formatMessage(i18n.realEstateDevelopment_Second_DescriptionSummary)}
            typeSecondParagraph={2}
          />
          <Spacing height={80} />
          <ListHeadingsWithImages withOutSummary={true} />
          <Spacing height={50} />
        </ContainerWrapper>
        <ContainerWrapper padding={0}>
          <ImageTextWrapper>
            {intl.locale === 'de' ? (
              <GatsbyImage image={getImage(imageWithText_de)} alt={intl.formatMessage(i18n.header)} />
            ) : (
              <GatsbyImage image={getImage(imageWithText_en)} alt={intl.formatMessage(i18n.header)} />
            )}
          </ImageTextWrapper>
        </ContainerWrapper>
        <ContainerWrapper>
          <Spacing height={100} />
          <MorePostByCategory
            spacingBottom={100}
            headingColor="var(--moon-D6)"
            categoryObj={{ name: intl.formatMessage(i18n.reference) }}
            categoryId={112}
            link={{ name: intl.formatMessage(i18n.allAboutService), path: 'services' }}
            alt={i18n.header}
          />
          <TeaserReadMore
            isDark
            imagePos="right"
            tag={intl.formatMessage(i18n.realEstateDevelopment_technologyTag)}
            tagColor="var(--sun-M)"
            title={intl.formatMessage(i18n.realEstateDevelopment_technologyTitle)}
            description={intl.formatMessage(i18n.realEstateDevelopment_technologyDescription)}
            readMore={{ name: intl.formatMessage(i18n.readMore), path: '/technology/mercury' }}
            withCarousel={true}
            images={[teaserOneImage, teaserOneImage]}
            height="640px"
          />
          <Spacing height={100} />
          <TeaserReadMore
            titleColor="var(--moon-D6)"
            isDark={false}
            imagePos="left"
            tag={intl.formatMessage(i18n.realEstateDevelopment_sustainabilityTag)}
            tagColor="var(--earth-M)"
            title={intl.formatMessage(i18n.realEstateDevelopment_sustainabilityTitle)}
            description={intl.formatMessage(i18n.realEstateDevelopment_sustainabilityDescription)}
            readMore={{ name: intl.formatMessage(i18n.readMore), path: '/who-we-are/sustainability' }}
            withCarousel={true}
            images={[teaserTwoImage, teaserTwoImage]}
            height="640px"
          />
          <Spacing height={160} />

          <ContentContainer>
            <S.LeadContent>
              <Heading type={2} color="var(--moon-D6)">
                {intl.formatMessage(i18n.realEstateDevelopment_withCardsTitle)}
              </Heading>
              <Spacing height={42} />
              <Paragraph>{intl.formatMessage(i18n.realEstateDevelopment_withCardsDescription)}</Paragraph>
            </S.LeadContent>
          </ContentContainer>
          <Spacing height={60} />
          <AssetCards padding={0} />
          <Spacing height={100} />
          <MorePostByCategory
            spacingBottom={100}
            headingColor="var(--moon-D6)"
            categoryObj={{ name: intl.formatMessage(i18n.realEstateDevelopment_trendsBlockLink) }}
            categoryId={112}
            link={{
              name: intl.formatMessage(i18n.realEstateDevelopment_trendsBlockName),
              path: 'who-we-are/references',
            }}
            alt={i18n.header}
          />
          <ContentContainer>
            <S.LeadContent>
              <Heading type={2} color="var(--moon-D6)">
                {intl.formatMessage(i18n.realEstateDevelopment_ServiceCardsTitle)}
              </Heading>
              <Spacing height={42} />
              <Paragraph>{intl.formatMessage(i18n.realEstateDevelopment_ServiceCardsSubTitle)}</Paragraph>
            </S.LeadContent>
          </ContentContainer>
          <Spacing height={60} />
          <ServiceCards height={220} />
        </ContainerWrapper>
        <Spacing height={100} />
      </OverflowHiddenWrapper>
    </PageLayout>
  );
};

export default RealEstateDevelopmentOverview;
