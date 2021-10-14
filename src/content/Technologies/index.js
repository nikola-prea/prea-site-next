import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { GatsbyImage } from 'gatsby-plugin-image';
import MorePostByCategory from '../../components/Modules/MorePostByCategory/MorePostByCategory';
import { PageLayout, Spacing, Container } from '../../components/Layout';
import SubHeader from '../../components/Modules/SubHeader/SubHeader';
import { TeaserReadMore } from '../../components/Modules/Teaser';
import { Heading, Paragraph } from '../../components';
import query from './query';
import * as S from './style';
import i18n from './i18n';

const TechnologiesOverview = () => {
  const intl = useIntl();
  const [header, teaserOneImage, teaserTwoImage] = query();

  const assetOptions = [
    { name: 'mercury', path: '/technologies/mercury' },
    // { name: 'PREA Cloud', path: '/technologies/cloud' },
  ];

  return (
    <PageLayout isDark>
      <SubHeader type={2} options={assetOptions} top="3rem" />
      <S.WrapperHeaderImage>
        <GatsbyImage image={header} alt={i18n.headerTitle} />
        <S.HeaderContentWrapper>
          <Heading type={1} color="var(--moon-L6)">
            {intl.formatMessage(i18n.headerTitle)}
          </Heading>
          <Spacing height={33} />
          <Heading type={2} color="var(--moon-L6)">
            {intl.formatMessage(i18n.headerDescription)}
          </Heading>
        </S.HeaderContentWrapper>
        <S.FirstHeaderDescription>
          <Heading type={2} color="var(--moon-L6)">
            {intl.formatMessage(i18n.TileFirstDescription)}
          </Heading>
        </S.FirstHeaderDescription>
        <S.SecondHeaderDescription>
          <Paragraph type={1} color="var(--moon-L6)" isBold={true}>
            {intl.formatMessage(i18n.TileSecondDescription)}
          </Paragraph>
        </S.SecondHeaderDescription>
      </S.WrapperHeaderImage>
      <Container padding="0">
        <Spacing height={140} />
        <TeaserReadMore
          isTransparent
          height="640px"
          imagePos="right"
          tag={intl.formatMessage(i18n.mercury)}
          tagColor="var(--sun-M)"
          title={intl.formatMessage(i18n.mercuryTitle)}
          description={intl.formatMessage(i18n.mercuryDescription)}
          bgImage={teaserOneImage}
          readMore={{ name: intl.formatMessage(i18n.mercuryLink), path: 'technologies/mercury' }}
        />
        <Spacing height={60} />
        <TeaserReadMore
          tagColor="var(--sky-M)"
          isTransparent
          height="640px"
          imagePos="left"
          tag={intl.formatMessage(i18n.cloud)}
          title={intl.formatMessage(i18n.cloudTitle)}
          description={intl.formatMessage(i18n.cloudDescription)}
          bgImage={teaserTwoImage}
        />
        <Spacing height={160} />
      </Container>
      <Container>
        {/* TODO path = 'trends-reports/whitepaper' */}
        <MorePostByCategory
          isDarker
          link={{ name: intl.formatMessage(i18n.whitepaperBlockLink), path: 'trends-reports/whitepaper' }}
          categoryId={77}
          padding="0 120px"
          categoryObj={{ name: intl.formatMessage(i18n.whitepaperBlockName) }}
          headingColor="var(--moon-L6)"
        />
      </Container>
    </PageLayout>
  );
};

export default TechnologiesOverview;
