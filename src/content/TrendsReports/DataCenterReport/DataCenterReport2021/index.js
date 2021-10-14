import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useState } from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import i18n from './i18n';
import * as S from './style';

import { MainTitleDescription } from './components/MainTitleDescription';
import {
  DataSection,
  InvestmentSection,
  LocationSection,
  ResponsibilitySection,
  TechnologySection,
} from './components/Sections';

import { OverflowHiddenWrapper, PageLayout, Spacing } from '../../../../components/Layout';

import SubHeader from '../../../../components/Modules/SubHeader/SubHeader';
import HeaderImage from '../../../../components/Modules/Header/HeaderImage';

import { TeaserReadMore } from '../../../../components/Modules/Teaser';
import MoreArticle from '../../../../components/Modules/MoreArticle';

const TechnologyOverview = () => {
  const intl = useIntl();
  /*  const [mapPointsActive, setMapPointsActive] = useState(false);
  const [fastLaneActive, setFastLaneActive] = useState(false);
  const [menFlightActive, setMenFlightActive] = useState(false); */

  const staticQuery = useStaticQuery(graphql`
    query {
      header: file(
        relativePath: { eq: "image/trends-reports/datacenterreport/datacenterreport2021/header_datacenterreport.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      headerData: file(
        relativePath: { eq: "image/trends-reports/datacenterreport/datacenterreport2021/hero_earth.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      headerTechnology: file(
        relativePath: { eq: "image/trends-reports/datacenterreport/datacenterreport2021/hero_car.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      cardSkyline: file(
        relativePath: { eq: "image/trends-reports/datacenterreport/datacenterreport2021/card_skyline.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      headerInvestment: file(
        relativePath: { eq: "image/trends-reports/datacenterreport/datacenterreport2021/hero_datacenter.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      cardPeople: file(
        relativePath: { eq: "image/trends-reports/datacenterreport/datacenterreport2021/card_people.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      headerLocation: file(
        relativePath: { eq: "image/trends-reports/datacenterreport/datacenterreport2021/hero_cityOrange.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      cardDataPoints: file(
        relativePath: { eq: "image/trends-reports/datacenterreport/datacenterreport2021/card_datapoints.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      cardFlash: file(
        relativePath: { eq: "image/trends-reports/datacenterreport/datacenterreport2021/card_flash.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      headerResponsibility: file(
        relativePath: { eq: "image/trends-reports/datacenterreport/datacenterreport2021/hero_data.png" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      cardGas: file(relativePath: { eq: "image/trends-reports/datacenterreport/datacenterreport2021/card_gas.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FIXED, width: 140, height: 140, quality: 100)
        }
      }
      cardWarm: file(relativePath: { eq: "image/trends-reports/datacenterreport/datacenterreport2021/card_warm.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FIXED, width: 140, height: 140, quality: 100)
        }
      }
      cardFlight: file(
        relativePath: { eq: "image/trends-reports/datacenterreport/datacenterreport2021/card_flight.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      cardCooling: file(
        relativePath: { eq: "image/trends-reports/datacenterreport/datacenterreport2021/card_cooling.png" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FIXED, width: 140, height: 140, quality: 100)
        }
      }
      cardBuildingManagement: file(
        relativePath: { eq: "image/trends-reports/datacenterreport/datacenterreport2021/card_buildingManagement.png" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FIXED, width: 140, height: 140, quality: 100)
        }
      }
      cardMercury: file(
        relativePath: { eq: "image/trends-reports/datacenterreport/datacenterreport2021/card_mercury.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `);

  const jumpScrollURL = `/${intl.locale}/trends-reports/data-center-report/datacenter-report-2021`;

  return (
    <PageLayout isDarker>
      <SubHeader top={0} type={3} btnName="Download" brand="Data Center Report 2021" comingFrom="datacenter-report">
        <S.JumpScrollLink to={`${jumpScrollURL}#tagDigitalScrollIndicator`}>
          {intl.formatMessage(i18n.tagDigital)}
        </S.JumpScrollLink>
        <S.JumpScrollLink to={`${jumpScrollURL}#tagTechnologyScrollIndicator`}>
          {intl.formatMessage(i18n.tagTechnology)}
        </S.JumpScrollLink>
        <S.JumpScrollLink to={`${jumpScrollURL}#tagInvestmentScrollIndicator`}>
          {intl.formatMessage(i18n.tagInvestment)}
        </S.JumpScrollLink>
        <S.JumpScrollLink to={`${jumpScrollURL}#tagLocationScrollIndicator`}>
          {intl.formatMessage(i18n.tagLocation)}
        </S.JumpScrollLink>
        <S.JumpScrollLink to={`${jumpScrollURL}#tagResponsibilityScrollIndicator`}>
          {intl.formatMessage(i18n.tagResponsibility)}
        </S.JumpScrollLink>
      </SubHeader>
      <OverflowHiddenWrapper>
        <HeaderImage
          isDark
          type={1}
          image={<GatsbyImage image={getImage(staticQuery.header)} alt={i18n.header} />}
          title={intl.formatMessage(i18n.pageTitleHero)}
        />
        <Spacing height={18} />
        <MainTitleDescription
          title={intl.formatMessage(i18n.titleAsset)}
          description={intl.formatMessage(i18n.descriptionAsset)}
        />
        <DataSection image={{ header: staticQuery.headerData }} />
        <Spacing height={100} />
        <TechnologySection image={{ header: staticQuery.headerTechnology, cardSkyline: staticQuery.cardSkyline }} />
        <Spacing height={100} />
        <InvestmentSection image={{ header: staticQuery.headerInvestment, cardPeople: staticQuery.cardPeople }} />
        <Spacing height={100} />
        <LocationSection
          image={{
            header: staticQuery.headerLocation,
            cardData: staticQuery.cardDataPoints,
            cardFlash: staticQuery.cardFlash,
          }}
        />
        <Spacing height={100} />
        <ResponsibilitySection
          image={{
            header: staticQuery.headerResponsibility,
            cardGas: staticQuery.cardGas,
            cardWarm: staticQuery.cardWarm,
            cardFlight: staticQuery.cardFlight,
            cardCooling: staticQuery.cardCooling,
            cardBuildingManagement: staticQuery.cardBuildingManagement,
          }}
        />
        <Spacing height={100} />
        <TeaserReadMore
          tag="mercury"
          tagColor="var(--sun-L1)"
          imagePos="right"
          readMore={{ name: 'More information', path: '/technologies/mercury' }}
          bgImage={getImage(staticQuery.cardMercury)}
          title="Headline"
          isDark
          secondTitle="Headline"
          description={intl.formatMessage(i18n.mercuryDescription)}
        />
        <Spacing height={100} />
        <MoreArticle category={{ name: 'Data Center Report', databaseId: 68 }} currentPostId={1612} />
      </OverflowHiddenWrapper>
    </PageLayout>
  );
};

export default TechnologyOverview;
