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
import { CardTechnology } from '/src/content/TrendsReports/DataCenterReport/DataCenterReport2021/components/Card';
import SubHeader from '../../../components/Modules/SubHeader/SubHeader';
import HeaderImage from '../../../components/Modules/Header/HeaderImage';
import { Heading, Paragraph } from '../../../components';
import { TileQuoteFull, TileQuoteHalfHalf } from '../../../components/Modules/TileQuote';
import MorePostByCategory from '../../../components/Modules/MorePostByCategory/MorePostByCategory';
import { TeaserReadMore } from '../../../components/Modules/Teaser';
import ServiceCard from '../../../components/Modules/Card/ServiceCard';
import ListHeadingsWithImages from '../../../components/Modules/ListHeadingsWithImages';
import { TitleDescription } from '../../TrendsReports/DataCenterReport/DataCenterReport2021/components/Title';
import styled from 'styled-components';
import TextLink from '/src/components/Atoms/TextLink';

export default function DatacenterOverview({}) {
  const intl = useIntl();

  const staticQuery = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "image/asset-classes/datacenter/header_datacenter.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      tileOne: file(relativePath: { eq: "image/asset-classes/datacenter/tileOne_datacenter.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      tileTwo: file(relativePath: { eq: "image/asset-classes/datacenter/tileTwo_datacenter.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      teaserOne: file(relativePath: { eq: "image/asset-classes/datacenter/teaserOne_datacenter.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      teaserTwo: file(relativePath: { eq: "image/asset-classes/datacenter/teaserTwo_datacenter.png" }) {
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
      <SubHeader
        top={0}
        type={1}
        brand={intl.formatMessage(i18n.datacenter)}
        btnPath="contact"
        comingFrom="Datacenter"
      />
      <OverflowHiddenWrapper>
        <HeaderImage
          isDark
          type={2}
          image={<GatsbyImage image={getImage(staticQuery.header)} alt={i18n.header} />}
          title={intl.formatMessage(i18n.datacenter)}
          color="var(--moon-L6)"
          subTitle={<span>{intl.formatMessage(i18n.datacenterHeaderDescription)}</span>}
        />
        <Container>
          <Spacing height={100} />
          {/* TODO Change Text */}
          <ContentContainer sideDistance="146">
            <Paragraph color="var(--moon-D6)" isBold={false}>
              {intl.formatMessage(i18n.datacenterAbstract)}
            </Paragraph>
          </ContentContainer>
          <Spacing height={140} />
          <ListHeadingsWithImages
            summaryHeadline={intl.formatMessage(i18n.datacenterHeadingsWithImagesTitle)}
            summaryDescription={intl.formatMessage(i18n.datacenterHeadingsWithImagesDescription)}
          />
          <Spacing height={100} />
          <TileQuoteHalfHalf
            align="right"
            description={intl.formatMessage(i18n.datacenterTileOneDescription)}
            alt={intl.formatMessage(i18n.datacenterTileOneAlt)}
            image={tileOneImage}
            color="var(--moon-D6)"
          />
          <Spacing height={100} />
          <TileQuoteHalfHalf
            align="left"
            description={intl.formatMessage(i18n.datacenterTileTwoDescription)}
            alt={intl.formatMessage(i18n.datacenterTileTwoAlt)}
            image={tileTwoImage}
            color="var(--moon-D6)"
          />

          {/* TODO: implement datacenter report teaser */}
          {/*<DataCenterReportTeaser />*/}
          <Spacing height={60} />
          <BackgroundWrapper>
            <Container>
              <TitleDescription
                // tag={intl.formatMessage(i18n.tagDigital)}
                isReport
                tagColor="var(--sky-L1)"
                // title={intl.formatMessage(i18n.titleDigital)}
                // description={intl.formatMessage(i18n.descriptionDigital)}
                descriptionWidth="34rem"
              />
              <Spacing height={60} />
              <Row margin="0">
                <WhyDatacenterContainer layout={1 / 2}>
                  <TitleContainer>
                    <Heading type={4} color="var(--moon-L6)">
                      {intl.formatMessage(i18n.datacenterReportTitle)}
                    </Heading>
                    <Spacing height={60} />
                    <span style={{ width: '100%' }}>
                      <TextLink>{intl.formatMessage(i18n.datacenterReportReadMore)}</TextLink>
                    </span>
                  </TitleContainer>
                </WhyDatacenterContainer>
                <CustomCardLayout layout={1 / 2} height={49}>
                  <CardTechnology
                    layout={1}
                    height="15rem"
                    title={'175'}
                    titleUnit="Zettabyte"
                    titleHeadingType={2}
                    titleColor="var(--moon-L6)"
                    description={intl.formatMessage(i18n.datacenterReportDescription1)}
                  />
                  <CardTechnology
                    layout={1}
                    height="15rem"
                    title={'41'}
                    titleUnit="%"
                    titleHeadingType={2}
                    titleColor="var(--moon-L6)"
                    description={intl.formatMessage(i18n.datacenterReportDescription2)}
                  />
                  <CardTechnology
                    layout={1}
                    height="15rem"
                    title={'4 - 6'}
                    titleUnit="%"
                    titleHeadingType={2}
                    titleColor="var(--moon-L6)"
                    description={intl.formatMessage(i18n.datacenterReportDescription3)}
                  />
                </CustomCardLayout>
              </Row>
              <Spacing height={100} />
            </Container>
          </BackgroundWrapper>

          <Spacing height={160} />
          <MorePostByCategory
            categoryObj={{ name: intl.formatMessage(i18n.cases) }}
            categoryId={83}
            headingColor="var(--moon-D6)"
            link={{ name: intl.formatMessage(i18n.allCaseDatacenter), path: 'who-we-are/references' }}
            alt={i18n.header}
          />

          <TeaserReadMore
            isDark
            imagePos="right"
            tag={intl.formatMessage(i18n.datacenterTechnologyTag)}
            tagColor="var(--sun-M)"
            title={intl.formatMessage(i18n.datacenterTechnologyTitle)}
            description={intl.formatMessage(i18n.datacenterTechnologyDescription)}
            readMore={{ name: intl.formatMessage(i18n.readMore), path: 'technologies/mercury' }}
            bgImage={teaserOneImage}
            height="640px"
          />
          <Spacing height={100} />
          <TeaserReadMore
            isDark={false}
            imagePos="left"
            tag={intl.formatMessage(i18n.datacenterSustainabilityTag)}
            tagColor="var(--earth-M)"
            titleColor="var(--moon-D6)"
            title={intl.formatMessage(i18n.datacenterSustainabilityTitle)}
            description={intl.formatMessage(i18n.datacenterSustainabilityDescription)}
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
              <Paragraph>{intl.formatMessage(i18n.datacenterGuideDevelopEvaluate)}</Paragraph>
            </S.LeadContent>
            <Spacing height={60} />
          </ContentContainer>
          <Row>{serviceCards.map((serviceCard) => serviceCard)}</Row>
          <Spacing height={160} />
          <MorePostByCategory
            link={{ name: intl.formatMessage(i18n.allToDatacenter), path: 'trends-reports' }}
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

const CustomCardLayout = styled.div`
  width: ${({ layout }) => `calc(${layout}*100% - (1 - ${layout})*var(--card-gap) );`};
  display: flex;
  flex-direction: column;
  div {
    min-height: 0;
  }
  row-gap: 2.1875rem;
  @media (max-width: 768px) and (min-width: 320px) {
    width: 100%;
    div {
      flex-direction: column;
      min-height: auto;
      p,
      h3 {
        text-align: left;
      }
    }
  }
`;

const BackgroundWrapper = styled.div`
  background-color: var(--moon-D6);
  width: 100vw;
  margin-left: calc(-50vw + 50% - 8px);
  position: relative;
`;

const WhyDatacenterContainer = styled.div`
  width: ${({ layout }) => `calc(${layout}*100% - (1 - ${layout})*var(--card-gap) );`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  padding: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
