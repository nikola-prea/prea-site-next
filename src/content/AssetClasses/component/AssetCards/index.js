/**
 * Created by tolga.kara on 08.09.21
 * src/content/AssetClasses/component/AssetCards
 */

import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import IconCard from '../../../../components/Modules/Card/IconCard/IconCard';
import i18n from '../../i18n';
import * as S from './style';

export default function AssetCards({ padding }) {
  const intl = useIntl();

  const staticQuery = useStaticQuery(graphql`
    query {
      buildingland: file(relativePath: { eq: "image/asset-classes/buildingLand/icon_asset_buildingland.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FIXED, width: 120, height: 156)
        }
      }
      datacenter: file(relativePath: { eq: "image/asset-classes/datacenter/icon_asset_datacenter.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FIXED, width: 120, height: 156)
        }
      }
      healthcare: file(relativePath: { eq: "image/asset-classes/healthcare/icon_asset_healthcare.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FIXED, width: 120, height: 156)
        }
      }
      hotel: file(relativePath: { eq: "image/asset-classes/hotel/icon_asset_hotel.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FIXED, width: 120, height: 156)
        }
      }
      living: file(relativePath: { eq: "image/asset-classes/living/icon_asset_living.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FIXED, width: 120, height: 156)
        }
      }
      logistic: file(relativePath: { eq: "image/asset-classes/logistic/icon_asset_logistic.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FIXED, width: 120, height: 156)
        }
      }
      office: file(relativePath: { eq: "image/asset-classes/office/icon_asset_office.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FIXED, width: 120, height: 156)
        }
      }
      retail: file(relativePath: { eq: "image/asset-classes/retail/icon_asset_retail.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FIXED, width: 120, height: 156)
        }
      }
    }
  `);

  const assetCards = [
    <IconCard
      title={intl.formatMessage(i18n.buildingLand)}
      path="asset-classes/building-land"
      icon={<GatsbyImage image={getImage(staticQuery.buildingland)} alt={i18n.buildingLand} />}
    />,
    <IconCard
      title={intl.formatMessage(i18n.office)}
      path="asset-classes/office"
      icon={<GatsbyImage image={getImage(staticQuery.office)} alt={i18n.office} />}
    />,
    <IconCard
      title={intl.formatMessage(i18n.datacenter)}
      path="asset-classes/datacenter"
      icon={<GatsbyImage image={getImage(staticQuery.datacenter)} alt={i18n.datacenter} />}
    />,
    <IconCard
      title={intl.formatMessage(i18n.retail)}
      path="asset-classes/retail"
      icon={<GatsbyImage image={getImage(staticQuery.retail)} alt={i18n.retail} />}
    />,
    <IconCard
      title={intl.formatMessage(i18n.healthcare)}
      path="asset-classes/healthcare"
      icon={<GatsbyImage image={getImage(staticQuery.healthcare)} alt={i18n.healthcare} />}
    />,
    <IconCard
      title={intl.formatMessage(i18n.hotel)}
      path="asset-classes/hotel"
      icon={<GatsbyImage image={getImage(staticQuery.hotel)} alt={i18n.hotel} />}
    />,
    <IconCard
      title={intl.formatMessage(i18n.logistic)}
      path="asset-classes/logistic"
      icon={<GatsbyImage image={getImage(staticQuery.logistic)} alt={i18n.logistic} />}
    />,
    <IconCard
      title={intl.formatMessage(i18n.living)}
      path="asset-classes/living"
      icon={<GatsbyImage image={getImage(staticQuery.living)} alt={i18n.living} />}
    />,
  ];

  return (
    <S.CardsWrapper padding={padding}>
      <S.FourTimesFourWrapper>
        <S.AssetRow>{assetCards.map((asset) => asset)}</S.AssetRow>
      </S.FourTimesFourWrapper>
    </S.CardsWrapper>
  );
}
