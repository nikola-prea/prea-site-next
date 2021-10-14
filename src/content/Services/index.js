import { useIntl } from 'gatsby-plugin-intl';
import { useStyledDarkMode } from 'gatsby-styled-components-dark-mode';
import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import i18n from './i18n';
import { Container, OverflowHiddenWrapper, PageLayout, Row, Spacing } from '../../components/Layout';
import HeaderImage from '../../components/Modules/Header/HeaderImage';
import SubHeader from '../../components/Modules/SubHeader/SubHeader';
import MorePostByCategory from '../../components/Modules/MorePostByCategory/MorePostByCategory';
import ServiceCards from '../AssetClasses/component/ServiceCards';
import animationData from '../../lotties/kiss-of-the-heart.json';

const ServicesOverview = () => {
  const { changeThemeSetting } = useStyledDarkMode();
  const intl = useIntl();

  const staticQuery = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "image/services/header_services.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      changeThemeSetting('light');
    }
  }, []);

  const servicesOption = [
    { name: intl.formatMessage(i18n.transaction), path: '/services/real-estate-transaction' },
    { name: intl.formatMessage(i18n.evaluation), path: '/services/real-estate-evaluation' },
    { name: intl.formatMessage(i18n.development), path: '/services/real-estate-development' },
    { name: intl.formatMessage(i18n.financing), path: '/services/real-estate-financing' },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <PageLayout isDark={false}>
      <SubHeader type={2} options={servicesOption} top="0rem" />
      <OverflowHiddenWrapper>
        <HeaderImage
          isDark
          type={1}
          image={<GatsbyImage image={getImage(staticQuery.header)} alt={i18n.header} />}
          title="Services"
          subTitle={intl.formatMessage(i18n.servicesSubTitleHeader)}
        />
        <Spacing height={40} />
        <Container>
          <ServiceCards />
          <Spacing height={100} />
          <MorePostByCategory
            spacingBottom={40}
            link={{ name: intl.formatMessage(i18n.allToServices), path: 'trends-reports' }}
            categoryId={39}
            categoryObj={{ name: intl.formatMessage(i18n.trendsReports) }}
            headingColor="var(--moon-D6)"
          />
        </Container>
      </OverflowHiddenWrapper>
    </PageLayout>
  );
};

export default ServicesOverview;
