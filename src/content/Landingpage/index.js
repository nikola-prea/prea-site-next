import { useIntl } from 'gatsby-plugin-intl';
import { useStyledDarkMode } from 'gatsby-styled-components-dark-mode';
import { useEffect } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import i18n from './i18n';
import { Container, PageLayout, Spacing, OverflowHiddenWrapper, ContentContainer } from '../../components/Layout';
import MorePostByCategory from '../../components/Modules/MorePostByCategory/MorePostByCategory';
import { TeaserReadMore } from '../../components/Modules/Teaser';
import { Heading, Paragraph } from '../../components';
import HeaderImage from '../../components/Modules/Header/HeaderImage';
import * as S from './style';

const LandingpageOverview = () => {
  const intl = useIntl();
  const { changeThemeSetting, themeSetting } = useStyledDarkMode();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // changeThemeSetting('light');
    }
  }, []);

  const staticQuery = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "image/landing-page/header_landingpage.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: FULL_WIDTH

            quality: 100
          )
        }
      }
      mercury: file(relativePath: { eq: "image/landing-page/header_mercury" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
        }
      }

      visitUsAtBanner: file(relativePath: { eq: "image/landing-page/banner_landingpage.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
        }
      }
    }
  `);
  const header = getImage(staticQuery.header);
  const mercury = getImage(staticQuery.mercury);
  const visitUsAtBanner = getImage(staticQuery.visitUsAtBanner);

  return (
    <PageLayout isHeaderImage marginTop="3">
      <OverflowHiddenWrapper>
        <HeaderImage
          isDark
          type={1}
          image={<GatsbyImage image={header} alt={i18n.header} />}
          title={intl.formatMessage(i18n.headerTitle)}
          subTitle={intl.formatMessage(i18n.headerDescription)}
          color="var(--sky-L3)"
          main
        />
        <Container>
          <Spacing height={100} />
          <ContentContainer sideDistance="0">
            <Heading type={5} isBold color="var(--moon-D6)">
              {intl.formatMessage(i18n.landingpageAbstract1)}
            </Heading>
            <Spacing height={100} />
            <Heading type={5} isBold color="var(--moon-D6)">
              {intl.formatMessage(i18n.landingpageAbstract2)}
            </Heading>
            <Spacing height={100} />
            <RoundedContainer>
              <GatsbyImage image={visitUsAtBanner} alt="/" />
            </RoundedContainer>
            <Spacing height={100} />
            {/*<HeaderImage*/}
            {/*  type={5}*/}
            {/*  title={intl.formatMessage(i18n.homeTileIntro)}*/}
            {/*  subTitle={intl.formatMessage(i18n.homeTileHeader)}*/}
            {/*  bgImage={mercury}*/}
            {/*/>*/}
            <Spacing height={100} />
          </ContentContainer>
          {/* <TeaserReadMore
            isDark
            imagePos="center"
            tag={intl.formatMessage(i18n.mercury)}
            tagColor="var(--sun_M)"
            title={intl.formatMessage(i18n.mercuryTitle)}
            // secondTitle={intl.formatMessage(i18n.mercuryTitle)}
            description={intl.formatMessage(i18n.mercuryDescription)}
            readMore={{ name: intl.formatMessage(i18n.readMore), path: '/technology' }}
            bgImage={mercury}
          />
          <TeaserReadMore
            isDark={false}
            imagePos="center-without-image"
            tag={intl.formatMessage(i18n.bewertungTag)}
            tagColor="var(--earth_M)"
            title={intl.formatMessage(i18n.bewertungTitle)}
            // secondTitle={intl.formatMessage(i18n.bewertungSecondTitle)}
            description={intl.formatMessage(i18n.bewertungDescription)}
            readMore={{ name: intl.formatMessage(i18n.readMore), path: '/technology' }}
          />
          <TeaserReadMore
            isDark={false}
            imagePos="center-without-image"
            tag={intl.formatMessage(i18n.finanzierungTag)}
            tagColor="var(--earth_M)"
            title={intl.formatMessage(i18n.finanzierungTitle)}
            // secondTitle={intl.formatMessage(i18n.bewertungSecondTitle)}
            description={intl.formatMessage(i18n.finanzierungDescription)}
            readMore={{ name: intl.formatMessage(i18n.readMore), path: '/technology' }}
          />
          <TeaserReadMore
            isDark={false}
            imagePos="center-without-image"
            tag={intl.formatMessage(i18n.entwicklungTag)}
            tagColor="var(--earth_M)"
            title={intl.formatMessage(i18n.entwicklungTitle)}
            // secondTitle={intl.formatMessage(i18n.bewertungSecondTitle)}
            description={intl.formatMessage(i18n.entwicklungDescription)}
            readMore={{ name: intl.formatMessage(i18n.readMore), path: '/technology' }}
          />
          <TeaserReadMore
            isDark={false}
            imagePos="center-without-image"
            tag={intl.formatMessage(i18n.transaktionenTag)}
            tagColor="var(--earth_M)"
            title={intl.formatMessage(i18n.transaktionenTitle)}
            // secondTitle={intl.formatMessage(i18n.bewertungSecondTitle)}
            description={intl.formatMessage(i18n.transaktionenDescription)}
            readMore={{ name: intl.formatMessage(i18n.readMore), path: '/technology' }}
          />
          <TeaserReadMore
            isDark={false}
            imagePos="without-image"
            tag={intl.formatMessage(i18n.nachhaltigkeitTag)}
            tagColor="var(--earth_M)"
            tagColor1="var(--space_M)"
            title={intl.formatMessage(i18n.nachhaltigkeitTitle)}
            description={intl.formatMessage(i18n.nachhaltigkeitDescription)}
            tag1={intl.formatMessage(i18n.complieanceTag)}
            title1={intl.formatMessage(i18n.complieanceTitle)}
            description1={intl.formatMessage(i18n.complieanceDescription)}
            readMore={{ name: intl.formatMessage(i18n.readMore), path: '/technology' }}
          /> */}
          <Spacing height={100} />
          <MorePostByCategory
            link={{ name: intl.formatMessage(i18n.trendsReportsLinkText), path: 'trends-reports' }}
            categoryId={39}
            categoryObj={{ name: intl.formatMessage(i18n.trendsReports) }}
            headingColor="var(--moon-D6)"
          />
        </Container>
      </OverflowHiddenWrapper>
    </PageLayout>
  );
};

export const RoundedContainer = styled.div`
  img {
    border-radius: 10px;
  }
`;

export default LandingpageOverview;
