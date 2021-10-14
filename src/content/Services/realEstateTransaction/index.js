import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ContentContainer, OverflowHiddenWrapper, PageLayout, Spacing } from '../../../components/Layout';
import MorePostByCategory from '../../../components/Modules/MorePostByCategory/MorePostByCategory';
import SubHeader from '../../../components/Modules/SubHeader/SubHeader';
import HeaderImage from '../../../components/Modules/Header/HeaderImage';
import FaktorCards from '../../../components/Modules/Card/FaktorCards';
import ServiceCards from '../../AssetClasses/component/ServiceCards';
import { TeaserReadMore } from '../../../components/Modules/Teaser';
import AssetCards from '../../AssetClasses/component/AssetCards';
import { Summary } from '../../../components/Modules/Summary';
import * as S from '../../AssetClasses/buildingLand/style';
import { Heading, Paragraph } from '../../../components';
import Quote from '../../../components/Modules/Quote';
import { ContainerWrapper } from './style';
import query from './query';
import i18n from '../i18n';

const RealEstateTransactionOverview = () => {
  const intl = useIntl();
  const {
    header,
    teaserOneImage,
    teaserTwoImage,
    circlesFirstImage,
    circlesSecondImage,
    circlesThirdImage,
    circlesFourthImage,
    circlesFifthImage,
  } = query();

  const contentForFaktorCards = [
    {
      image: <GatsbyImage image={getImage(circlesFirstImage)} alt={i18n.header} />,
      firstParagraph: intl.formatMessage(i18n.realEstateTransaction_firstFaktorTitle),
      secondParagraph: intl.formatMessage(i18n.realEstateTransaction_firstFaktorSubTitle),
    },
    {
      image: <GatsbyImage image={getImage(circlesSecondImage)} alt={i18n.header} />,
      firstParagraph: intl.formatMessage(i18n.realEstateTransaction_secondFaktorTitle),
      secondParagraph: intl.formatMessage(i18n.realEstateTransaction_secondFaktorSubTitle),
    },
    {
      image: <GatsbyImage image={getImage(circlesThirdImage)} alt={i18n.header} />,
      firstParagraph: intl.formatMessage(i18n.realEstateTransaction_thirdFaktorTitle),
      secondParagraph: intl.formatMessage(i18n.realEstateTransaction_thirdFaktorSubTitle),
    },
    {
      image: <GatsbyImage image={getImage(circlesFourthImage)} alt={i18n.header} />,
      firstParagraph: intl.formatMessage(i18n.realEstateTransaction_fourthFaktorTitle),
      secondParagraph: intl.formatMessage(i18n.realEstateTransaction_fourthFaktorSubTitle),
    },
    {
      image: <GatsbyImage image={getImage(circlesFifthImage)} alt={i18n.header} />,
      firstParagraph: intl.formatMessage(i18n.realEstateTransaction_fifthFaktorTitle),
      secondParagraph: intl.formatMessage(i18n.realEstateTransaction_fifthFaktorSubTitle),
    },
  ];

  return (
    <PageLayout isDark={false}>
      <SubHeader type={1} brand="Real Estate Transaction" top="0rem" />
      <OverflowHiddenWrapper>
        <HeaderImage
          isDark
          type={1}
          image={<GatsbyImage image={getImage(header)} alt={i18n.header} />}
          title={intl.formatMessage(i18n.realEstateTransaction_TitleHeader)}
          subTitle={intl.formatMessage(i18n.realEstateTransaction_SubTitleHeader)}
        />
        <Spacing height={100} />
        <ContainerWrapper>
          <Quote quote={intl.formatMessage(i18n.realEstateTransaction_Quote)} />
          <Spacing height={140} />
          <Summary
            color="var(--moon-D6)"
            isBold={true}
            summaryFirstParagraph={intl.formatMessage(i18n.realEstateTransaction_SummaryTitle)}
            summaryHeadline={intl.formatMessage(i18n.realEstateTransaction_HeadlineSummary)}
            summarySecondParagraph={intl.formatMessage(i18n.realEstateTransaction_DescriptionSummary)}
          />
          <Spacing height={60} />
          <Quote
            headlineQuote={intl.formatMessage(i18n.realEstateTransaction_firstSectionTitle)}
            quote={intl.formatMessage(i18n.realEstateTransaction_firstSectionSubTitle)}
          />
          <Spacing height={100} />
          <Quote
            headlineQuote={intl.formatMessage(i18n.realEstateTransaction_secondSectionTitle)}
            quote={intl.formatMessage(i18n.realEstateTransaction_secondSectionSubTitle)}
          />
          <Spacing height={100} />
          <Quote
            headlineQuote={intl.formatMessage(i18n.realEstateTransaction_thirdSectionTitle)}
            quote={intl.formatMessage(i18n.realEstateTransaction_thirdSectionSubTitle)}
          />
          <Spacing height={100} />
          <Quote
            headlineQuote={intl.formatMessage(i18n.realEstateTransaction_fourthSectionTitle)}
            quote={intl.formatMessage(i18n.realEstateTransaction_fourthSectionSubTitle)}
          />
          <Spacing height={100} />
          <Quote
            headlineQuote={intl.formatMessage(i18n.realEstateTransaction_fifthSectionTitle)}
            quote={intl.formatMessage(i18n.realEstateTransaction_fifthSectionSubTitle)}
          />
          <Spacing height={140} />
          <FaktorCards
            content={contentForFaktorCards}
            title={intl.formatMessage(i18n.realEstateTransaction_FaktorCardsTitle)}
            readMore={{ name: intl.formatMessage(i18n.realEstateTransaction_FaktorCardsLink), path: '/' }}
          />
          <Spacing height={100} />
          <MorePostByCategory
            link={{
              name: intl.formatMessage(i18n.realEstateTransaction_referencesBlockLink),
              path: 'who-we-are/references',
            }}
            categoryId={77}
            padding="0 120px"
            categoryObj={{ name: intl.formatMessage(i18n.realEstateTransaction_referencesBlockName) }}
            headingColor="var(--moon-D6)"
            spacingBottom={100}
          />
          <TeaserReadMore
            isDark={true}
            bgImage={teaserOneImage}
            height="640px"
            imagePos="right"
            tag={intl.formatMessage(i18n.realEstateTransaction_teaserTechnologyTag)}
            tagColor="var(--sun-M)"
            title={intl.formatMessage(i18n.realEstateTransaction_teaserTechnologyTitle)}
            description={intl.formatMessage(i18n.realEstateTransaction_teaserTechnologyDescription)}
            readMore={{
              name: intl.formatMessage(i18n.realEstateTransaction_teaserTechnologyLink),
              path: 'technologies',
            }}
          />
          <Spacing height={100} />
          <TeaserReadMore
            height="640px"
            bgImage={teaserTwoImage}
            imagePos="left"
            tag={intl.formatMessage(i18n.realEstateTransaction_teaserSustainabilityTag)}
            tagColor="var(--earth-M)"
            titleColor="var(--moon-D6)"
            title={intl.formatMessage(i18n.realEstateTransaction_teaserSustainabilityTitle)}
            description={intl.formatMessage(i18n.realEstateTransaction_teaserSustainabilityDescription)}
            readMore={{
              name: intl.formatMessage(i18n.realEstateTransaction_teaserSustainabilityLink),
              path: 'who-we-are/sustainability',
            }}
          />
          <Spacing height={160} />
          <ContentContainer>
            <S.LeadContent>
              <Heading type={2} color="var(--moon-D6)">
                {intl.formatMessage(i18n.realEstateTransaction_withCardsTitle)}
              </Heading>
              <Spacing height={42} />
              <Paragraph>{intl.formatMessage(i18n.realEstateTransaction_withCardsDescription)}</Paragraph>
            </S.LeadContent>
            <Spacing height={60} />
          </ContentContainer>
          <AssetCards padding={0} />
          <Spacing height={100} />

          <MorePostByCategory
            spacingBottom={100}
            link={{
              name: intl.formatMessage(i18n.realEstateTransaction_trendsBlockLink),
              path: 'trends-reports',
            }}
            categoryId={77}
            padding="0 120px"
            categoryObj={{ name: intl.formatMessage(i18n.realEstateTransaction_trendsBlockName) }}
            headingColor="var(--moon-D6)"
          />

          <ContentContainer>
            <S.LeadContent>
              <Heading type={2} color="var(--moon-D6)">
                {intl.formatMessage(i18n.realEstateTransaction_ServiceCardsTitle)}
              </Heading>
              <Spacing height={42} />
              <Paragraph color="var(--moon-D6)">
                {intl.formatMessage(i18n.realEstateTransaction_ServiceCardsSubTitle)}
              </Paragraph>
            </S.LeadContent>
          </ContentContainer>
          <Spacing height={60} />
          <ServiceCards height={220} />
        </ContainerWrapper>
        <Spacing height={100} />
      </OverflowHiddenWrapper>
    </PageLayout>
  );
};

export default RealEstateTransactionOverview;
