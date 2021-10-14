/**
 * Created by tolga.kara on 03.09.21
 * src/content/AssetClasses/buildingLand
 */

import React, { useEffect, useState } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import * as S from './style';
import i18n from '../i18n';
import {
  Container,
  ContentContainer,
  OverflowHiddenWrapper,
  PageLayout,
  Row,
  Spacing,
} from '../../../components/Layout';
import SubHeader from '../../../components/Modules/SubHeader/SubHeader';
import HeaderImage from '../../../components/Modules/Header/HeaderImage';
import { Heading, Paragraph } from '../../../components';
import { TileQuoteFull, TileQuoteHalfHalf } from '../../../components/Modules/TileQuote';
import MorePostByCategory from '../../../components/Modules/MorePostByCategory/MorePostByCategory';
import { TeaserReadMore } from '../../../components/Modules/Teaser';
import ServiceCard from '../../../components/Modules/Card/ServiceCard';
import ListHeadingsWithImages from '../../../components/Modules/ListHeadingsWithImages';

export default function OfficeOverview({}) {
  const intl = useIntl();

  const staticQuery = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "image/asset-classes/office/header_office.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      tileOne: file(relativePath: { eq: "image/asset-classes/office/tileOne_office.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      tileTwo: file(relativePath: { eq: "image/asset-classes/office/tileTwo_office.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      teaserOne: file(relativePath: { eq: "image/asset-classes/office/teaserOne_office.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      teaserTwo: file(relativePath: { eq: "image/asset-classes/office/teaserTwo_office.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `);

  const serviceCards = [
    <ServiceCard
      height={220}
      title={intl.formatMessage(i18n.transaction)}
      path="/services/real-estate-transaction"
      layout={1 / 2}
    />,
    <ServiceCard
      height={220}
      title={intl.formatMessage(i18n.evaluation)}
      path="/services/real-estate-evaluation"
      layout={1 / 2}
    />,
    <ServiceCard
      height={220}
      title={intl.formatMessage(i18n.development)}
      path="/services/real-estate-development"
      layout={1 / 2}
    />,
    <ServiceCard
      height={220}
      title={intl.formatMessage(i18n.financing)}
      path="/services/real-estate-financing"
      layout={1 / 2}
    />,
  ];

  const tileOneImage = getImage(staticQuery.tileOne);
  const tileTwoImage = getImage(staticQuery.tileTwo);

  const teaserOneImage = getImage(staticQuery.teaserOne);
  const teaserTwoImage = getImage(staticQuery.teaserTwo);

  return (
    <PageLayout isDark={false}>
      <SubHeader top={0} type={1} brand={intl.formatMessage(i18n.office)} btnPath="contact" comingFrom="Office" />
      <OverflowHiddenWrapper>
        <HeaderImage
          isDark
          type={2}
          image={<GatsbyImage image={getImage(staticQuery.header)} alt={i18n.header} />}
          title={intl.formatMessage(i18n.office)}
          color="var(--moon-D6)"
          subTitle={<span>{intl.formatMessage(i18n.officeHeaderDescription)}</span>}
        />
        <Container>
          <Spacing height={100} />
          {/* TODO Change Text */}
          <ContentContainer sideDistance="146">
            <Paragraph color="var(--moon-D6)" isBold={false}>
              {intl.formatMessage(i18n.officeAbstract)}
            </Paragraph>
          </ContentContainer>
          <Spacing height={140} />
          <ListHeadingsWithImages
            summaryHeadline={intl.formatMessage(i18n.officeHeadingsWithImagesTitle)}
            summaryDescription={intl.formatMessage(i18n.officeHeadingsWithImagesDescription)}
          />
          <Spacing height={100} />
          <TileQuoteHalfHalf
            align="right"
            description={intl.formatMessage(i18n.officeTileOneDescription)}
            alt={intl.formatMessage(i18n.officeTileOneAlt)}
            image={tileOneImage}
            color="var(--moon-D6)"
          />
          <Spacing height={100} />
          <TileQuoteHalfHalf
            align="left"
            description={intl.formatMessage(i18n.officeTileTwoDescription)}
            alt={intl.formatMessage(i18n.officeTileTwoAlt)}
            image={tileTwoImage}
            color="var(--moon-D6)"
          />
          <Spacing height={160} />
          <MorePostByCategory
            categoryObj={{ name: intl.formatMessage(i18n.cases) }}
            categoryId={83}
            headingColor="var(--moon-D6)"
            link={{ name: intl.formatMessage(i18n.allCaseOffice), path: 'who-we-are/references' }}
            alt={i18n.header}
          />

          <TeaserReadMore
            isDark
            imagePos="right"
            tag={intl.formatMessage(i18n.officeTechnologyTag)}
            tagColor="var(--sun-M)"
            title={intl.formatMessage(i18n.officeTechnologyTitle)}
            description={intl.formatMessage(i18n.officeTechnologyDescription)}
            readMore={{ name: intl.formatMessage(i18n.readMore), path: 'technologies/mercury' }}
            bgImage={teaserOneImage}
            height="640px"
          />
          <Spacing height={100} />
          <TeaserReadMore
            isDark={false}
            imagePos="left"
            tag={intl.formatMessage(i18n.officeSustainabilityTag)}
            tagColor="var(--earth-M)"
            titleColor="var(--moon-D6)"
            title={intl.formatMessage(i18n.officeSustainabilityTitle)}
            description={intl.formatMessage(i18n.officeSustainabilityDescription)}
            readMore={{ name: intl.formatMessage(i18n.readMore), path: 'who-we-are/sustainability' }}
            bgImage={teaserTwoImage}
            height="640px"
          />
          <Spacing height={160} />
          <ContentContainer>
            <S.LeadContent>
              <Heading type={2} color="var(--moon-D6)">
                {intl.formatMessage(i18n.weEvaluateReviewDevelop)}
              </Heading>
              <Spacing height={42} />
              <Paragraph>{intl.formatMessage(i18n.guideDevelopEvaluate)}</Paragraph>
            </S.LeadContent>
            <Spacing height={60} />
          </ContentContainer>
          <Row>{serviceCards.map((serviceCard) => serviceCard)}</Row>
          <Spacing height={160} />
          <MorePostByCategory
            link={{ name: intl.formatMessage(i18n.allToOffice), path: 'trends-reports' }}
            categoryId={83}
            headingColor="var(--moon-D6)"
            categoryObj={{ name: intl.formatMessage(i18n.trendsReports) }}
            hasMaxWidth={false}
          />
        </Container>
      </OverflowHiddenWrapper>
    </PageLayout>
  );
}
