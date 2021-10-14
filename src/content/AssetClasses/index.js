import { useIntl } from 'gatsby-plugin-intl';
import { useStyledDarkMode } from 'gatsby-styled-components-dark-mode';
import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import i18n from './i18n';

import { Container, OverflowHiddenWrapper, PageLayout, Spacing } from '../../components/Layout';
import IconCard from '../../components/Modules/Card/IconCard/IconCard';
import * as S from './style';
import HeaderImage from '../../components/Modules/Header/HeaderImage';
import SubHeader from '../../components/Modules/SubHeader/SubHeader';
import MorePostByCategory from '../../components/Modules/MorePostByCategory/MorePostByCategory';
import AssetCards from './component/AssetCards';

const AssetClassesOverview = () => {
  const { changeThemeSetting, themeSetting } = useStyledDarkMode();
  const intl = useIntl();

  const staticQuery = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "image/asset-classes/header_assetclasses.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // changeThemeSetting('light');
    }
  }, []);

  const assetOptions = [
    { name: intl.formatMessage(i18n.buildingLand), path: '/asset-classes/building-land' },
    { name: intl.formatMessage(i18n.office), path: '/asset-classes/office' },
    { name: intl.formatMessage(i18n.datacenter), path: '/asset-classes/datacenter' },
    { name: intl.formatMessage(i18n.retail), path: '/asset-classes/retail' },
    { name: intl.formatMessage(i18n.healthcare), path: '/asset-classes/healthcare' },
    { name: intl.formatMessage(i18n.hotel), path: '/asset-classes/hotel' },
    { name: intl.formatMessage(i18n.logistic), path: '/asset-classes/logistic' },
    { name: intl.formatMessage(i18n.living), path: '/asset-classes/living' },
  ];

  return (
    <PageLayout isDark={false}>
      <SubHeader type={2} options={assetOptions} top="0rem" />
      <OverflowHiddenWrapper>
        <HeaderImage
          isDark
          type={1}
          image={<GatsbyImage image={getImage(staticQuery.header)} alt={i18n.assetClassesHeaderAlt} />}
          title={intl.formatMessage(i18n.assetClassesHeaderTitle)}
          subTitle={<span>{intl.formatMessage(i18n.assetClassesHeaderDescription)}</span>}
        />
        <Spacing height={40} />
        <AssetCards />
        <Spacing height={100} />
        <Container>
          <MorePostByCategory
            headingColor="var(--moon-D6)"
            link={{ name: intl.formatMessage(i18n.allToAsset), path: 'trends-reports' }}
            categoryId={60}
            categoryObj={{ name: 'Trends & Reports' }}
            hasShadow
          />
        </Container>
      </OverflowHiddenWrapper>
    </PageLayout>
  );
};

export default AssetClassesOverview;
