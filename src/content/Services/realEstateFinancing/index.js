import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Container, ContentContainer, OverflowHiddenWrapper, PageLayout, Spacing } from '../../../components/Layout';
import MorePostByCategory from '../../../components/Modules/MorePostByCategory/MorePostByCategory';
import HeaderImage from '../../../components/Modules/Header/HeaderImage';
import SubHeader from '../../../components/Modules/SubHeader/SubHeader';
import ServiceCards from '../../AssetClasses/component/ServiceCards';
import { TileQuoteFull } from '../../../components/Modules/TileQuote';
import { TeaserReadMore } from '../../../components/Modules/Teaser';
import { ContainerWrapper } from '../realEstateTransaction/style';
import AssetCards from '../../AssetClasses/component/AssetCards';
import { Summary } from '../../../components/Modules/Summary';
import * as S from '../../AssetClasses/buildingLand/style';
import { Heading, Paragraph } from '../../../components';
import Quote from '../../../components/Modules/Quote';
import Video from '../../../components/Modules/Video';
import i18n from '../i18n';

const RealEstateFinancingOverview = () => {
  const intl = useIntl();
  const staticQuery = useStaticQuery(graphql`
    query {
      header: file(
        relativePath: { eq: "image/services/real-estate-financing/PREA_Real_Estate_Financing_3840x1440.jpg" }
      ) {
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
      <SubHeader type={1} brand="Real Estate Financing" top="0rem" comingFrom="Real Estate Financing" />
      <OverflowHiddenWrapper>
        <HeaderImage
          isDark
          type={1}
          image={<GatsbyImage image={getImage(staticQuery.header)} alt={i18n.header} />}
          title={intl.formatMessage(i18n.realEstateFinancing_headerTitle)}
          subTitle={intl.formatMessage(i18n.realEstateFinancing_headerSubTitle)}
        />

        <Spacing height={100} />
        <ContainerWrapper>
          <Quote quote={intl.formatMessage(i18n.realEstateFinancing_Quote)} />
          <Spacing height={100} />
          <Video url="https://www.youtube.com/embed/uRmqaEz9QM8" />
          <Spacing height={140} />
          <Summary
            color="var(--paragraph-color)"
            isBold
            summaryFirstParagraph={intl.formatMessage(i18n.realEstateFinancing_SummaryTitle)}
            summaryHeadline={intl.formatMessage(i18n.realEstateFinancing_HeadlineSummary)}
            summarySecondParagraph={intl.formatMessage(i18n.realEstateFinancing_DescriptionSummary)}
          />
          <Spacing height={80} />
          <Quote
            headlineQuote={intl.formatMessage(i18n.realEstateFinancing_firstSectionTitle)}
            quote={intl.formatMessage(i18n.realEstateFinancing_firstSectionSubTitle)}
          />
          <Spacing height={100} />
          <Quote
            headlineQuote={intl.formatMessage(i18n.realEstateFinancing_secondSectionTitle)}
            quote={intl.formatMessage(i18n.realEstateFinancing_secondSectionSubTitle)}
          />
          <Spacing height={100} />
          <Quote
            headlineQuote={intl.formatMessage(i18n.realEstateFinancing_thirdSectionTitle)}
            quote={intl.formatMessage(i18n.realEstateFinancing_thirdSectionSubTitle)}
          />
          <Spacing height={140} />
          <Summary
            color="var(--paragraph-color)"
            isBold
            summaryFirstParagraph={intl.formatMessage(i18n.realEstateFinancing_Second_SummaryTitle)}
            summaryHeadline={intl.formatMessage(i18n.realEstateFinancing_Second_HeadlineSummary)}
            summarySecondParagraph={intl.formatMessage(i18n.realEstateFinancing_Second_DescriptionSummary)}
          />
          <Spacing height={60} />
          <Quote
            headlineQuote={intl.formatMessage(i18n.realEstateFinancing_fourthSectionTitle)}
            quote={intl.formatMessage(i18n.realEstateFinancing_fourthSectionSubTitle)}
          />
          <Spacing height={100} />
          <Quote
            headlineQuote={intl.formatMessage(i18n.realEstateFinancing_fifthSectionTitle)}
            quote={intl.formatMessage(i18n.realEstateFinancing_fifthSectionSubTitle)}
          />
          <Spacing height={100} />
          <Quote
            headlineQuote={intl.formatMessage(i18n.realEstateFinancing_sixthSectionTitle)}
            quote={intl.formatMessage(i18n.realEstateFinancing_sixthSectionSubTitle)}
          />
          <Spacing height={100} />
          <Quote
            headlineQuote={intl.formatMessage(i18n.realEstateFinancing_seventhSectionTitle)}
            quote={intl.formatMessage(i18n.realEstateFinancing_seventhSectionSubTitle)}
          />
          <Spacing height={160} />
          <MorePostByCategory
            headingColor="var(--moon-D6)"
            categoryObj={{ name: intl.formatMessage(i18n.realEstateFinancing_reference) }}
            categoryId={112}
            link={{ name: intl.formatMessage(i18n.realEstateFinancing_allAboutService), path: '/services' }}
            alt={i18n.header}
          />
        </ContainerWrapper>
        <ContainerWrapper padding={0}>
          <TeaserReadMore
            isDark
            imagePos="right"
            tag={intl.formatMessage(i18n.realEstateFinancing_technologyTag)}
            description={intl.formatMessage(i18n.realEstateFinancing_technologyDescription)}
            tagColor="var(--sun-M)"
            title={intl.formatMessage(i18n.realEstateFinancing_technologyTitle)}
            readMore={{ name: intl.formatMessage(i18n.readMore), path: '/technology' }}
            withCarousel
            images={[teaserOneImage, teaserOneImage]}
            height="640px"
          />
          <Spacing height={100} />
          <TeaserReadMore
            isDark={false}
            imagePos="left"
            titleColor="var(--moon-D6)"
            tag={intl.formatMessage(i18n.realEstateFinancing_sustainabilityTag)}
            tagColor="var(--earth-M)"
            title={intl.formatMessage(i18n.realEstateFinancing_sustainabilityTitle)}
            description={intl.formatMessage(i18n.realEstateFinancing_sustainabilityDescription)}
            readMore={{ name: intl.formatMessage(i18n.readMore), path: '/sustainability' }}
            withCarousel
            images={[teaserTwoImage, teaserTwoImage]}
            height="640px"
          />
        </ContainerWrapper>
        <ContainerWrapper padding={0}>
          <Spacing height={160} />
          <ContentContainer>
            <S.LeadContent>
              <Heading type={2} color="var(--moon-D6)">
                {intl.formatMessage(i18n.realEstateFinancing_withCardsTitle)}
              </Heading>
              <Spacing height={42} />
              <Paragraph>{intl.formatMessage(i18n.realEstateFinancing_withCardsDescription)}</Paragraph>
            </S.LeadContent>
          </ContentContainer>
          <Spacing height={60} />
          <AssetCards padding={0} />
          <Spacing height={100} />
          <MorePostByCategory
            spacingBottom={100}
            headingColor="var(--moon-D6)"
            categoryObj={{ name: intl.formatMessage(i18n.realEstateFinancing_trendsBlockLink) }}
            categoryId={112}
            link={{ name: intl.formatMessage(i18n.realEstateFinancing_trendsBlockName), path: 'who-we-are/references' }}
            alt={i18n.header}
          />
          <ContentContainer>
            <S.LeadContent>
              <Heading type={2} color="var(--moon-D6)">
                {intl.formatMessage(i18n.realEstateFinancing_ServiceCardsTitle)}
              </Heading>
              <Spacing height={42} />
              <Paragraph>{intl.formatMessage(i18n.realEstateFinancing_ServiceCardsSubTitle)}</Paragraph>
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

export default RealEstateFinancingOverview;
