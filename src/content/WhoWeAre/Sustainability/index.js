import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import useDownload from '../../../components/Modules/DownloadBox/hooks/useDownload';
import { MemberCard } from '../../../components/Modules/Card/MemberCard';
import SubHeader from '../../../components/Modules/SubHeader/SubHeader';
import { DownloadBox } from '../../../components/Modules/DownloadBox';
import HeaderImage from '../../../components/Modules/Header/HeaderImage';
import { PageLayout, Spacing } from '../../../components/Layout';
import { Heading, Paragraph } from '../../../components';
import Video from '../../../components/Modules/Video';
import * as S from './style';
import i18n from '../i18n';
import MorePostByCategory from '../../../components/Modules/MorePostByCategory/MorePostByCategory';

export default function SustainabilityOverview() {
  const intl = useIntl();
  const { download, handleClick } = useDownload();

  const staticQuery = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "image/who-we-are/sustainability/greenBackground.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      headlineLogo: file(relativePath: { eq: "image/who-we-are/sustainability/headlineLogo.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `);

  return (
    <PageLayout isDark={false}>
      <SubHeader type={1} brand="Sustainability" top="0rem" />
      <S.HeaderWrapper>
        <HeaderImage
          isDark
          type={2}
          transparent
          image={<GatsbyImage image={getImage(staticQuery.header)} alt={i18n.substainabilityheader} />}
          title="Sustainability"
        />
        <S.HeaderTitle>
          <Paragraph color="var( --earth-D6)" type={1}>
            {intl.formatMessage(i18n.substainabilityheaderTitle)}
          </Paragraph>
          <Spacing height={24} />
          <div style={{ width: '225px', height: '68px' }}>
            <GatsbyImage image={getImage(staticQuery.headlineLogo)} alt={i18n.substainabilityheader} />
          </div>
        </S.HeaderTitle>
      </S.HeaderWrapper>
      <Spacing height={100} />
      <S.ContainerWrapper>
        <S.ContentContainer>
          <S.TitleWrapper>
            <Paragraph type={1}>{intl.formatMessage(i18n.substainabilityfirstTitle)}</Paragraph>
            <Spacing height={100} />
            <Heading type={3} color="var(--moon-D6)">
              {intl.formatMessage(i18n.substainabilityfirstHeadingFirstPart)}
              <span style={{ color: 'var(--earth-M)' }}>
                {intl.formatMessage(i18n.substainabilityfirstHeadingSecondPart)}
              </span>
            </Heading>
          </S.TitleWrapper>
        </S.ContentContainer>

        <Spacing height={100} />
        <Video url="https://www.youtube.com/embed/9SVnkxpX_jI" />
        <Spacing height={100} />
        <S.TitleWrapper>
          <Paragraph type={1}>{intl.formatMessage(i18n.substainabilitysecondTitle)}</Paragraph>
        </S.TitleWrapper>
        <Spacing height={100} />
        <S.TitleWrapper justify="left">
          <Heading type={2} color="var(--earth-D1)">
            {intl.formatMessage(i18n.substainabilitysecondFirstTitle)}
          </Heading>
        </S.TitleWrapper>
        <Spacing height={40} />
        <MemberCard
          justify="flex-end"
          memberDescription={intl.formatMessage(i18n.substainabilityfirstMemberDescription)}
          memberPosition={intl.formatMessage(i18n.substainabilityfirstMemberPosition)}
          memberName={intl.formatMessage(i18n.substainabilityfirstMemberFullName)}
          image={
            <StaticImage
              src="../../../../static/image/who-we-are/sustainability/PREA_team_Alex.png"
              alt={`${intl.formatMessage(i18n.substainabilityfirstMemberFullName)} - Card Image`}
              layout="fixed"
            />
          }
        />

        <Spacing height={100} />
        <S.TitleWrapper justify="left">
          <Heading type={2} color="var(--earth-D1)">
            {intl.formatMessage(i18n.substainabilitysecondSectionTitle)}
          </Heading>
        </S.TitleWrapper>

        <Spacing height={40} />
        <MemberCard
          positionImg="right"
          memberDescription={intl.formatMessage(i18n.substainabilitysecondMemberDescription)}
          memberPosition={intl.formatMessage(i18n.substainabilitysecondMemberPosition)}
          memberName={intl.formatMessage(i18n.substainabilitysecondMemberFullName)}
          image={
            <StaticImage
              src="../../../../static/image/who-we-are/sustainability/gabriel.png"
              alt={`${intl.formatMessage(i18n.substainabilitysecondMemberFullName)} - Card Image`}
              layout="fixed"
            />
          }
        />
        <Spacing height={100} />
        <S.TitleWrapper justify="left">
          <Heading type={2} color="var(--earth-D1)">
            {intl.formatMessage(i18n.substainabilitythirdSectionTitle)}
          </Heading>
        </S.TitleWrapper>

        <Spacing height={40} />
        <MemberCard
          justify="flex-end"
          memberDescription={intl.formatMessage(i18n.substainabilitythirdMemberDescription)}
          memberPosition={intl.formatMessage(i18n.substainabilitythirdMemberPosition)}
          memberName={intl.formatMessage(i18n.substainabilitythirdMemberFullName)}
          image={
            <StaticImage
              src="../../../../static/image/who-we-are/sustainability/quoteLeftLe.png"
              alt=" - Card Image"
              layout="fixed"
            />
          }
        />
        <Spacing height={100} />
        <MorePostByCategory
          spacingBottom={100}
          headingColor="var(--moon-D6)"
          categoryObj={{ name: intl.formatMessage(i18n.realEstateDevelopment_trendsBlockLink) }}
          categoryId={112}
          link={{
            name: intl.formatMessage(i18n.realEstateDevelopment_trendsBlockName),
            path: 'who-we-are/references',
          }}
          // alt={i18n.header}
        />
        {/* WE NEED TO CHANGE href=... */}
        {/* <DownloadBox */}
        {/*  href="../Compliance/assets/somefile.txt" */}
        {/*  download={download} */}
        {/*  handleClick={handleClick} */}
        {/*  textLink={intl.formatMessage(i18n.substainabilitytextLink)} */}
        {/*  downloadFull={ */}
        {/*    <StaticImage */}
        {/*      src="../../../../static/image/who-we-are/sustainability/downloadFull.png" */}
        {/*      alt={`${intl.formatMessage(i18n.substainabilitydownloadFull)} - Card Image`} */}
        {/*      layout="fixed" */}
        {/*    /> */}
        {/*  } */}
        {/*  downloadEmpty={ */}
        {/*    <StaticImage */}
        {/*      src="../../../../static/image/who-we-are/sustainability/downloadEmpty.png" */}
        {/*      alt={`${intl.formatMessage(i18n.substainabilitydownloadEmpty)} - Card Image`} */}
        {/*      layout="fixed" */}
        {/*    /> */}
        {/*  } */}
        {/* /> */}
      </S.ContainerWrapper>
    </PageLayout>
  );
}
