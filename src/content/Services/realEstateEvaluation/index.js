import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import CurvedLine from '../../Technologies/mercury/vectors/CurvedLine.svg';
import { Container, ContentContainer, OverflowHiddenWrapper, PageLayout, Spacing } from '../../../components/Layout';
import MorePostByCategory from '../../../components/Modules/MorePostByCategory/MorePostByCategory';
import { TeaserTextColumns } from '../../../components/Modules/TeaserTextColumns';
import SubHeader from '../../../components/Modules/SubHeader/SubHeader';
import HeaderImage from '../../../components/Modules/Header/HeaderImage';
import { TeaserReadMore } from '../../../components/Modules/Teaser';
import ServiceCards from '../../AssetClasses/component/ServiceCards';
import AssetCards from '../../AssetClasses/component/AssetCards';
import { Summary } from '../../../components/Modules/Summary';
import * as S from '../../AssetClasses/buildingLand/style';
import { Heading, Paragraph } from '../../../components';
import Quote from '../../../components/Modules/Quote';
import Video from '../../../components/Modules/Video';
import { TeaserWithCurvedLine } from './style';
import i18n from '../i18n';
import { ContainerWrapper } from '../realEstateTransaction/style';

const RealEstateEvaluationOverview = () => {
  const intl = useIntl();

  const staticQuery = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "image/services/real-estate-evaluation/header_realEstateEvaluation.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      teaserOne: file(relativePath: { eq: "image/services/real-estate-transaction/teaserOne.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      teaserTwo: file(relativePath: { eq: "image/services/real-estate-transaction/teaserTwo.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `);

  const teaserOneImage = getImage(staticQuery.teaserOne);
  const teaserTwoImage = getImage(staticQuery.teaserTwo);

  return (
    <PageLayout isDark={false}>
      <SubHeader type={1} brand="Real Estate Evaluation" top="0rem" />
      <OverflowHiddenWrapper>
        <HeaderImage
          isDark
          type={1}
          image={<GatsbyImage image={getImage(staticQuery.header)} alt={i18n.header} />}
          title={intl.formatMessage(i18n.realEstateEvaluation_headerTitle)}
          subTitle={intl.formatMessage(i18n.realEstateEvaluation_headerSubTitle)}
        />
        <Spacing height={100} />
        <ContainerWrapper>
          <Quote quote={intl.formatMessage(i18n.realEstateEvaluation_Quote)} />
          <Spacing height={100} />
          <Video url="https://www.youtube.com/embed/N8Pvgq63LR8" />
          <Spacing height={140} />
          <Summary
            color="var(--paragraph-color)"
            isBold
            summaryFirstParagraph={intl.formatMessage(i18n.realEstateEvaluation_SummaryTitle)}
            summaryHeadline={intl.formatMessage(i18n.realEstateEvaluation_HeadlineSummary)}
            summarySecondParagraph={intl.formatMessage(i18n.realEstateEvaluation_DescriptionSummary)}
          />
          <Spacing height={60} />
          <TeaserWithCurvedLine>
            <CurvedLine />
            <Spacing height={24} />

            <TeaserTextColumns
              isDark
              firstTitle={intl.formatMessage(i18n.realEstateEvaluation_areaTitle)}
              firstSubTitle={intl.formatMessage(i18n.realEstateEvaluation_areaSubTitle)}
              firstDescription={intl.formatMessage(i18n.realEstateEvaluation_areaDescription)}
              secondTitle={intl.formatMessage(i18n.realEstateEvaluation_tailormadeTitle)}
              secondSubTitle={intl.formatMessage(i18n.realEstateEvaluation_tailormadeSubTitle)}
              secondDescription={intl.formatMessage(i18n.realEstateEvaluation_tailormadeDescription)}
            />
          </TeaserWithCurvedLine>
          <Spacing height={160} />
          <Quote
            headlineQuote={intl.formatMessage(i18n.realEstateEvaluation_firstSectionTitle)}
            quote={intl.formatMessage(i18n.realEstateEvaluation_firstSectionSubTitle)}
          />
          <Spacing height={100} />
          <Quote
            headlineQuote={intl.formatMessage(i18n.realEstateEvaluation_secondSectionTitle)}
            quote={intl.formatMessage(i18n.realEstateEvaluation_secondSectionSubTitle)}
          />
          <Spacing height={100} />
          <Quote
            headlineQuote={intl.formatMessage(i18n.realEstateEvaluation_thirdSectionTitle)}
            quote={intl.formatMessage(i18n.realEstateEvaluation_thirdSectionSubTitle)}
          />
          <Spacing height={100} />
          <Quote
            headlineQuote={intl.formatMessage(i18n.realEstateEvaluation_fourthSectionTitle)}
            quote={intl.formatMessage(i18n.realEstateEvaluation_fourthSectionSubTitle)}
          />
          <Spacing height={100} />

          <MorePostByCategory
            link={{
              name: intl.formatMessage(i18n.realEstateEvaluation_referencesBlockLink),
              path: 'who-we-are/references',
            }}
            categoryId={77}
            padding="0 120px"
            categoryObj={{ name: intl.formatMessage(i18n.realEstateEvaluation_referencesBlockName) }}
            headingColor="var(--moon-D6)"
            spacingBottom={100}
          />

          <TeaserReadMore
            isDark
            imagePos="right"
            tag={intl.formatMessage(i18n.realEstateEvaluation_technologyTag)}
            tagColor="var(--sun-M)"
            title={intl.formatMessage(i18n.realEstateEvaluation_technologyTitle)}
            description={intl.formatMessage(i18n.realEstateEvaluation_technologyDescription)}
            readMore={{ name: intl.formatMessage(i18n.readMore), path: '/technology/mercury' }}
            withCarousel
            images={[teaserOneImage, teaserOneImage]}
            height="640px"
          />
          <Spacing height={100} />
          <TeaserReadMore
            isDark={false}
            imagePos="left"
            tag={intl.formatMessage(i18n.realEstateEvaluation_sustainabilityTag)}
            tagColor="var(--earth-M)"
            titleColor="var(--moon-D6)"
            title={intl.formatMessage(i18n.realEstateEvaluation_sustainabilityTitle)}
            description={intl.formatMessage(i18n.realEstateEvaluation_sustainabilityDescription)}
            readMore={{ name: intl.formatMessage(i18n.readMore), path: '/who-we-are/sustainability' }}
            withCarousel
            images={[teaserTwoImage, teaserTwoImage]}
            height="640px"
          />

          <Spacing height={100} />
          <ContentContainer>
            <S.LeadContent>
              <Heading type={2} color="var(--moon-D6)">
                {intl.formatMessage(i18n.realEstateEvaluation_withCardsTitle)}
              </Heading>
              <Spacing height={42} />
              <Paragraph>{intl.formatMessage(i18n.realEstateEvaluation_withCardsDescription)}</Paragraph>
            </S.LeadContent>
            <Spacing height={60} />
          </ContentContainer>
          <AssetCards padding={0} />
          <Spacing height={100} />

          <MorePostByCategory
            spacingBottom={100}
            link={{
              name: intl.formatMessage(i18n.realEstateTransaction_trendsBlockLink),
              path: 'trends-reports',
            }}
            categoryId={77}
            padding="0 120px"
            categoryObj={{ name: intl.formatMessage(i18n.realEstateTransaction_trendsBlockName) }}
            headingColor="var(--moon-D6)"
          />

          <ContentContainer>
            <S.LeadContent>
              <Heading type={2} color="var(--moon-D6)">
                {intl.formatMessage(i18n.realEstateTransaction_ServiceCardsTitle)}
              </Heading>
              <Spacing height={42} />
              <Paragraph color="var(--moon-D6)">
                {intl.formatMessage(i18n.realEstateTransaction_ServiceCardsSubTitle)}
              </Paragraph>
            </S.LeadContent>
          </ContentContainer>
          <Spacing height={60} />
          <ServiceCards height={220} padding="0px" />
        </ContainerWrapper>
        <Spacing height={100} />
      </OverflowHiddenWrapper>
    </PageLayout>
  );
};

export default RealEstateEvaluationOverview;
