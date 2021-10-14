import { useIntl } from 'gatsby-plugin-intl';
import React, { useEffect } from 'react';
import { useStyledDarkMode } from 'gatsby-styled-components-dark-mode';
import * as S from './style';
import { Row, Spacing, PageLayout } from '../../components/Layout';
import { Heading, Paragraph } from '../../components';
import i18n from './i18n';
import { SectionWrapper } from './style';

const LegalOverview = () => {
  const intl = useIntl();
  const { changeThemeSetting, themeSetting } = useStyledDarkMode();
  const menuListObject = [
    {
      brand: intl.formatMessage(i18n.services),
      path: '/services',
      children: [
        { name: intl.formatMessage(i18n.transaction), path: '/services/real-estate-transaction' },
        { name: intl.formatMessage(i18n.evaluation), path: '/services/real-estate-evaluation' },
        { name: intl.formatMessage(i18n.financing), path: '/services/real-estate-financing' },
        { name: intl.formatMessage(i18n.investment), path: '/services/real-estate-investment' },
        { name: intl.formatMessage(i18n.development), path: '/services/real-estate-development' },
      ],
    },
    {
      brand: intl.formatMessage(i18n.assetClasses),
      path: '/asset-classes',
      children: [
        { name: intl.formatMessage(i18n.buildingLand), path: '/asset-classes/building-land' },
        { name: intl.formatMessage(i18n.office), path: '/asset-classes/office' },
        { name: intl.formatMessage(i18n.datacenter), path: '/asset-classes/datacenter' },
        { name: intl.formatMessage(i18n.retail), path: '/asset-classes/retail' },
        { name: intl.formatMessage(i18n.healthcare), path: '/asset-classes/healthcare' },
        { name: intl.formatMessage(i18n.hotel), path: '/asset-classes/hotel' },
        { name: intl.formatMessage(i18n.logistic), path: '/asset-classes/logistic' },
        { name: intl.formatMessage(i18n.living), path: '/asset-classes/living' },
      ],
    },
    {
      brand: intl.formatMessage(i18n.technology),
      path: '/technology',
      children: [
        { name: intl.formatMessage(i18n.mercury), path: '/technology/mercury' },
        // { name: intl.formatMessage(i18n.cloud), path: '/technology/cloud' },
      ],
    },
    {
      brand: intl.formatMessage(i18n.pressEvents),
      path: '/press-events',
      children: [
        { name: intl.formatMessage(i18n.pressRelease), path: '/press-events/press-release' },
        { name: intl.formatMessage(i18n.pressPortfolio), path: '/press-events/press-portfolio' },
        { name: intl.formatMessage(i18n.pressContact), path: '/press-events/press-contact' },
        { name: intl.formatMessage(i18n.events), path: '/press-events/events' },
      ],
    },
    {
      brand: intl.formatMessage(i18n.trendsReports),
      path: '/trends-reports',
      children: [
        { name: intl.formatMessage(i18n.blogArticle), path: '/trends-reports/blog' },
        { name: intl.formatMessage(i18n.datacenterReport), path: '/trends-reports/datacenter-report' },
        { name: intl.formatMessage(i18n.quantReport), path: '/trends-reports/Quant Report' },
        { name: intl.formatMessage(i18n.quartalsReport), path: '/trends-reports/Quartalsreport' },
        { name: intl.formatMessage(i18n.whitepaper), path: '/trends-reports/whitepaper' },
      ],
    },
    {
      brand: intl.formatMessage(i18n.aboutUs),
      path: '/about',
      children: [
        { name: intl.formatMessage(i18n.team), path: '/who-we-are/team' },
        { name: intl.formatMessage(i18n.career), path: '/who-we-are/career' },
        { name: intl.formatMessage(i18n.compliance), path: '/who-we-are/compliance' },
        { name: intl.formatMessage(i18n.diversity), path: '/who-we-are/diversity' },
        { name: intl.formatMessage(i18n.sustainability), path: '/who-we-are/sustainability' },
        { name: intl.formatMessage(i18n.references), path: '/who-we-are/references' },
      ],
    },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      changeThemeSetting('light');
    }
  }, []);

  return (
    <PageLayout>
      <S.Container>
        <S.CustomHeading>
          <Heading type={2} color="var(--moon-D6)">
            {intl.formatMessage(i18n.sitemap)}
          </Heading>
        </S.CustomHeading>
        <S.ContentWrapper>
          {menuListObject.map((menu) => (
            <SectionWrapper>
              <Heading type={5} color="var(--moon-D6)">
                <S.CustomLink to={menu.path}>{menu.brand}</S.CustomLink>
              </Heading>
              <Spacing height={24} />
              {menu.children.map(({ name, path, index }) => (
                <Paragraph type={1}>
                  <S.CustomLink to={path}>{name}</S.CustomLink>
                </Paragraph>
              ))}
            </SectionWrapper>
          ))}
        </S.ContentWrapper>
        {/* <Spacing height={100} /> */}
      </S.Container>
    </PageLayout>
  );
};

export default LegalOverview;
