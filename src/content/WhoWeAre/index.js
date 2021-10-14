import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { RowAchievementCards } from '../../components/Modules/Card/RowAchievementCards';
import { TileReadMoreCard } from '../../components/Modules/Card/TileReadMoreCard';
import { TwoColumnsContent } from '../../components/Modules/TwoColumnsContent';
import { PageLayout, Spacing } from '../../components/Layout';
import { MemberCard } from '../../components/Modules/Card/MemberCard';
import SubHeader from '../../components/Modules/SubHeader/SubHeader';
import HeaderImage from '../../components/Modules/Header/HeaderImage';
import ServiceCards from '../AssetClasses/component/ServiceCards';
import { LinksList } from '../../components/Modules/LinksList';
import { Summary } from '../../components/Modules/Summary';
import { Heading, Paragraph } from '../../components';
import Video from '../../components/Modules/Video';
import * as S from './style';
import i18n from './i18n';
import query from './query';

export default function WhoWeAreOverview() {
  const intl = useIntl();
  const [header, groupMercury, bigWavyLine] = query();

  const assetOptions = [
    { name: intl.formatMessage(i18n.teamSubHeaderBrand), path: '/who-we-are/team' },
    { name: intl.formatMessage(i18n.compliancetitle), path: '/who-we-are/compliance' },
    { name: intl.formatMessage(i18n.substainabilityheaderTitle), path: '/who-we-are/sustainability' },
    { name: intl.formatMessage(i18n.references), path: '/who-we-are/references' },
  ];

  return (
    <PageLayout isDarker>
      <SubHeader type={2} brand="Who we are" top="0rem" options={assetOptions} />
      <S.HeaderWrapper>
        <HeaderImage
          transparent
          isDark
          type={2}
          image={<GatsbyImage image={header} alt={i18n.whoweareheaderTitle} />}
          title="Who we are"
        />
      </S.HeaderWrapper>

      <S.ContentWrapper>
        <Spacing height={140} />
        <Summary
          summaryFirstParagraph={intl.formatMessage(i18n.whowearesummaryFirstParagraph)}
          summaryHeadline={intl.formatMessage(i18n.whowearesummaryHeadline)}
          summarySecondParagraph={intl.formatMessage(i18n.whowearesummarySecondParagraph)}
        />
        <Spacing height={132} />
        <MemberCard
          addPadding={false}
          textColor="var(--moon-L6)"
          typeDescription={6}
          typePosition={2}
          memberDescription={intl.formatMessage(i18n.whowearefirstMemberDescription)}
          memberPosition={intl.formatMessage(i18n.whowearefirstMemberPosition)}
          memberName={intl.formatMessage(i18n.whowearefirstMemberFullName)}
          positionImg="right"
          image={
            <StaticImage
              src="../../../static/image/who-we-are/DSC_6325.jpg"
              alt={`${intl.formatMessage(i18n.whowearefirstMemberFullName)} - Card Image`}
              layout="fixed"
            />
          }
        />

        <Spacing height={40} />
        <TileReadMoreCard
          more={false}
          title={intl.formatMessage(i18n.whowearetileReadMoreSecondCardTitle)}
          description={intl.formatMessage(i18n.whowearetileReadMoreSecondCardDescraption)}
          image={
            <StaticImage
              src="../../../static/image/who-we-are/maskGroup.png"
              alt={`${intl.formatMessage(i18n.whowearetileReadMoreSecondCardTitle)}-Card Image`}
              layout="fixed"
            />
          }
        />
        <RowAchievementCards
          bgColor="var(--moon-S1)"
          firstCardTitle={intl.formatMessage(i18n.whowearefirst_Block_achievementsFirstCardTitle)}
          firstCardDescription={intl.formatMessage(i18n.whowearefirst_Block_achievementsFirstCardDescription)}
          secondCardTitle={intl.formatMessage(i18n.whowearefirst_Block_achievementsSecondCardTitle)}
          secondCardDescription={intl.formatMessage(i18n.whowearefirst_Block_achievementsSecondCardDescription)}
          thirdCardTitle={intl.formatMessage(i18n.whowearefirst_Block_achievementsThirdCardTitle)}
          thirdCardDescription={intl.formatMessage(i18n.whowearefirst_Block_achievementsThirdCardDescription)}
        />
        <Spacing height={100} />
      </S.ContentWrapper>
      <S.ContentWrapper padding="0">
        <GatsbyImage image={bigWavyLine} alt="/" />
      </S.ContentWrapper>
      <S.ContentWrapper>
        <Spacing height={100} />
        <S.TitleWrapper content="center">
          <Heading type={6} color="var(--moon-L6)">
            {intl.formatMessage(i18n.whowearethirdHeadline)}
          </Heading>
          <Spacing height={42} />
          <Heading type={2} color="var(--moon-L6)">
            {intl.formatMessage(i18n.whowearefourthHeadline)}
          </Heading>
        </S.TitleWrapper>
        <Spacing height={40} />
        <GatsbyImage image={groupMercury} alt="/" />
        <Spacing height={100} />
        <MemberCard
          addPadding={false}
          topContent="20%"
          widthContent="31%"
          textColor="var(--moon-L6)"
          memberDescription={intl.formatMessage(i18n.whowearesecondMemberDescription)}
          memberPosition={intl.formatMessage(i18n.whowearesecondMemberPosition)}
          memberName={intl.formatMessage(i18n.whowearesecondMemberFullName)}
          image={
            <StaticImage
              width={1280}
              height={680}
              src="../../../static/image/who-we-are/juri.jpg"
              alt={`${intl.formatMessage(i18n.whowearesecondMemberFullName)}-Card Image`}
              layout="fixed"
            />
          }
        />
        <Spacing height={40} />
        <TileReadMoreCard
          more={false}
          title={intl.formatMessage(i18n.whowearetileReadMoreFirstCardTitle)}
          description={intl.formatMessage(i18n.whowearetileReadMoreFirstCardDescraption)}
          image={
            <StaticImage
              src="../../../static/image/who-we-are/adobeStock_443709198.png"
              alt={`${intl.formatMessage(i18n.whowearetileReadMoreFirstCardTitle)}-Card Image`}
              layout="fixed"
            />
          }
        />
        <Spacing height={40} />
        <MemberCard
          addPadding={false}
          textColor="var(--moon-L6)"
          typeDescription={6}
          typePosition={2}
          memberDescription={intl.formatMessage(i18n.whowearethirdMemberDescription)}
          memberPosition={intl.formatMessage(i18n.whowearethirdMemberPosition)}
          memberName={intl.formatMessage(i18n.whowearethirdMemberFullName)}
          positionImg="right"
          image={
            <StaticImage
              src="../../../static/image/who-we-are/DSC_6073.jpg"
              alt={`${intl.formatMessage(i18n.whowearethirdMemberFullName)}-Card Image`}
              layout="fixed"
            />
          }
        />
        <Spacing height={100} />
        <Summary
          summaryHeadline={intl.formatMessage(i18n.whowearesecondSummaryHeadline)}
          summarySecondParagraph={intl.formatMessage(i18n.whowearesecondSummarySecondParagraph)}
        />
        <Spacing height={100} />

        <RowAchievementCards
          firstCardTitle={intl.formatMessage(i18n.whowearesecond_Block_achievementsFirstCardTitle)}
          firstCardDescription={intl.formatMessage(i18n.whowearesecond_Block_achievementsFirstCardDescription)}
          secondCardTitle={intl.formatMessage(i18n.whowearesecond_Block_achievementsSecondCardTitle)}
          secondCardDescription={intl.formatMessage(i18n.whowearesecond_Block_achievementsSecondCardDescription)}
          thirdCardTitle={intl.formatMessage(i18n.whowearesecond_Block_achievementsThirdCardTitle)}
          thirdCardDescription={intl.formatMessage(i18n.whowearesecond_Block_achievementsThirdCardDescription)}
        />
        <Spacing height={24} />
        <RowAchievementCards
          firstCardTitle={intl.formatMessage(i18n.whowearethird_Block_achievementsFirstCardTitle)}
          firstCardDescription={intl.formatMessage(i18n.whowearethird_Block_achievementsFirstCardDescription)}
          secondCardTitle={intl.formatMessage(i18n.whowearethird_Block_achievementsSecondCardTitle)}
          secondCardDescription={intl.formatMessage(i18n.whowearethird_Block_achievementsSecondCardDescription)}
          thirdCardTitle={intl.formatMessage(i18n.whowearethird_Block_achievementsThirdCardTitle)}
          thirdCardDescription={intl.formatMessage(i18n.whowearethird_Block_achievementsThirdCardDescription)}
        />
        <Spacing height={24} />
        <MemberCard
          addPadding={false}
          topContent="20%"
          widthContent="31%"
          textColor="var(--moon-L6)"
          memberDescription={intl.formatMessage(i18n.whowearefourthMemberDescription)}
          memberPosition={intl.formatMessage(i18n.whowearefourthMemberPosition)}
          memberName={intl.formatMessage(i18n.whowearefourthMemberFullName)}
          image={
            <StaticImage
              src="../../../static/image/who-we-are/alex.png"
              alt={`${intl.formatMessage(i18n.whowearefourthMemberFullName)}-Card Image`}
              layout="fixed"
            />
          }
        />
        <Spacing height={24} />
        <Video url="https://www.youtube.com/embed/Ei6Ng-ZXfhE" />
        <Spacing height={100} />
        <TwoColumnsContent
          firstTitle={intl.formatMessage(i18n.whowearefirstTitle_TwoColumn)}
          firstDescription={intl.formatMessage(i18n.whowearefirstDescription_TwoColumn)}
          secondTitle={intl.formatMessage(i18n.whowearesecondTitle_TwoColumn)}
          secondDescription={intl.formatMessage(i18n.whowearesecondDescription_TwoColumn)}
        />
        <Spacing height={100} />
        <LinksList
          mainTitle={intl.formatMessage(i18n.whowearemainTitle_LinksList)}
          firstLinkTitle={intl.formatMessage(i18n.whowearefirstLinkTitle)}
          secondLinkTitle={intl.formatMessage(i18n.whowearesecondLinkTitle)}
          thirdLinkTitle={intl.formatMessage(i18n.whowearethirdLinkTitle)}
          fourthLinkTitle={intl.formatMessage(i18n.whowearefourthLinkTitle)}
        />
        <Spacing height={100} />

        <S.TitleWrapper justify="left" paddingLeft="10%">
          <Heading type={2} color="var(--moon-L6)">
            {intl.formatMessage(i18n.whowearesectionHeadline)}
          </Heading>
          <Spacing height={42} />
          <Paragraph color="var(--moon-L6)">{intl.formatMessage(i18n.whowearesectionParagraph)}</Paragraph>
        </S.TitleWrapper>
        <Spacing height={60} />
        <ServiceCards height={220} isDark />
      </S.ContentWrapper>
    </PageLayout>
  );
}
