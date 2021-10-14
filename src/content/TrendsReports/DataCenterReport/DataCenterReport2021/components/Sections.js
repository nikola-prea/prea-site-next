import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import Hero from '../../../../../components/Hero';
import { Container, Row, Spacing } from '../../../../../components/Layout';
import { TitleDescription } from './Title';
import i18n from '../i18n';
import { CardTechnology, RowCard } from './Card';
import InternetGraph from '../vectors/InternetGraph.svg';
import BerlinChart from '../vectors/BerlinChart.svg';
import { Paragraph } from '../../../../../components';
import * as S from '../style';

export const DataSection = ({ title, description, image }) => {
  const intl = useIntl();
  const vectors = {
    berlinChart: <BerlinChart />,
    internetGraph: <InternetGraph />,
  };

  return (
    <>
      <Hero image={<GatsbyImage image={getImage(image.header)} alt="Test" />} />
      <Spacing height={100} />
      <Container>
        <div id="tagDigitalScrollIndicator" />
        <TitleDescription
          tag={intl.formatMessage(i18n.tagDigital)}
          isReport
          tagColor="var(--sky-L1)"
          title={intl.formatMessage(i18n.titleDigital)}
          description={intl.formatMessage(i18n.descriptionDigital)}
          descriptionWidth="34rem"
        />
        <Spacing height={60} />
        <Row margin="0">
          <CardTechnology
            layout={1 / 2}
            height="15rem"
            title={intl.formatMessage(i18n.blueCard1Title)}
            titleUnit="Zettabyte"
            titleHeadingType={2}
            titleColor="var(--sky-L1)"
            description={intl.formatMessage(i18n.blueCard1Description)}
          />
          <CardTechnology
            layout={1 / 2}
            height="15rem"
            title={intl.formatMessage(i18n.blueCard2Title)}
            titleUnit="Gigabyte"
            titleHeadingType={2}
            titleColor="var(--sky-L1)"
            description={intl.formatMessage(i18n.blueCard2Description)}
          />
          <CardTechnology
            layout={1}
            height="15rem"
            title={intl.formatMessage(i18n.blueCard3Title)}
            titleColor="var(--sky-L1)"
            spacing={42}
            titleHeadingType={2}
            description={intl.formatMessage(i18n.blueCard3Description)}
            image={vectors.internetGraph}
          />
        </Row>
        <Spacing height={100} />
      </Container>
    </>
  );
};

export const TechnologySection = ({ title, description, image }) => {
  const intl = useIntl();
  const vectors = {
    berlinChart: <BerlinChart />,
  };

  return (
    <>
      <S.HeroContainer>
        <Hero image={<GatsbyImage image={getImage(image.header)} alt="Test" />} />
      </S.HeroContainer>
      <Spacing height={100} />
      <Container>
        <div id="tagTechnologyScrollIndicator" />
        <Row>
          <TitleDescription
            tag={intl.formatMessage(i18n.tagTechnology)}
            id="tagTechnology"
            isReport
            tagColor="var(--space-L1)"
            title={intl.formatMessage(i18n.titleTechnology)}
            description={intl.formatMessage(i18n.descriptionTechnology)}
            descriptionWidth="31.25rem"
            titleBreak={3}
          />

          <CardTechnology
            layout={2 / 3}
            height="500px"
            mobileHeight="26rem"
            fullBg
            titleColor="var(--space-L1)"
            image={<GatsbyImage image={getImage(image.cardSkyline)} alt="Test" />}
          />
          <CardTechnology
            layout={1 / 3}
            height="500px"
            title={intl.formatMessage(i18n.purpleCard1Title)}
            titleColor="#965591"
            description={intl.formatMessage(i18n.purpleCard1Description)}
          />
          <CardTechnology
            layout={1 / 3}
            height="500px"
            title={intl.formatMessage(i18n.purpleCard2Title)}
            titleUnit="GB"
            titleHeadingType={2}
            titleColor="var(--space-L1)"
            description={intl.formatMessage(i18n.purpleCard2Description)}
          />
          <CardTechnology
            layout={2 / 3}
            height="500px"
            padding="1rem"
            isBerlin
            mobileHeight="32rem"
            titleColor="var(--space-L1)"
            image={vectors.berlinChart}
            imageHeight="500px"
            imageWidth="500px"
          />
        </Row>
      </Container>
    </>
  );
};

export const InvestmentSection = ({ title, description, image }) => {
  const intl = useIntl();

  return (
    <>
      <S.HeroContainer>
        <Hero image={<GatsbyImage image={getImage(image.header)} alt="Test" />} />
      </S.HeroContainer>
      <Container>
        <div id="tagInvestmentScrollIndicator" />
        <Row>
          <TitleDescription
            tag={intl.formatMessage(i18n.tagInvestment)}
            id="tagInvestment"
            isReport
            tagColor="var(--fire-L1)"
            title={intl.formatMessage(i18n.titleInvestment)}
            description={intl.formatMessage(i18n.descriptionInvestment)}
          />

          <CardTechnology
            layout={1 / 2}
            height="708px"
            mobileHeight="26rem"
            fullBg
            image={<GatsbyImage image={getImage(image.cardPeople)} alt="Test" />}
          />

          <S.CustomCardLayout layout={1 / 2} height={49}>
            <CardTechnology
              layout={1}
              title={intl.formatMessage(i18n.orangeCard1Title)}
              titleHeadingType={2}
              titleUnit="%"
              height="220px"
              titleColor="var(--fire-L1)"
              description={intl.formatMessage(i18n.orangeCard1Description)}
            />
            <CardTechnology
              layout={1}
              title={intl.formatMessage(i18n.orangeCard2Title)}
              titleHeadingType={2}
              titleUnit="%"
              height="220px"
              titleColor="var(--fire-L1)"
              description={intl.formatMessage(i18n.orangeCard2Description)}
            />
            <CardTechnology
              layout={1}
              title={intl.formatMessage(i18n.orangeCard3Title)}
              titleHeadingType={2}
              titleUnit="%"
              height="220px"
              titleColor="var(--fire-L1)"
              description={intl.formatMessage(i18n.orangeCard3Description)}
            />
          </S.CustomCardLayout>
        </Row>
      </Container>
    </>
  );
};
export const LocationSection = ({ title, description, image }) => {
  const intl = useIntl();

  return (
    <>
      <S.HeroContainer>
        <Hero image={<GatsbyImage image={getImage(image.header)} alt="Test" />} />
      </S.HeroContainer>
      <Container>
        <div id="tagLocationScrollIndicator" />
        <Spacing height={100} />
        <Row>
          <TitleDescription
            tag={intl.formatMessage(i18n.tagLocation)}
            isReport
            tagColor="var(--sun-L1)"
            title={intl.formatMessage(i18n.titleLocation)}
            description={intl.formatMessage(i18n.descriptionLocation)}
          />
          <CardTechnology
            layout={1 / 3}
            height="500px"
            spacing={42}
            titleColor="var(--sun-L1)"
            title={intl.formatMessage(i18n.topThreeTitle)}
            description={intl.formatMessage(i18n.topThreeDescription)}>
            <S.ListMenu>
              <S.ListItem chartPercent="100%" underlineColor="var(--sun-L1)">
                {intl.formatMessage(i18n.powerSupply)}
                <hr />
                <hr />
              </S.ListItem>
              <S.ListItem chartPercent="85%" underlineColor="var(--sun-L1)">
                {intl.formatMessage(i18n.privacy)}
                <hr />
                <hr />
              </S.ListItem>
              <S.ListItem chartPercent="85%" underlineColor="var(--sun-L1)">
                {intl.formatMessage(i18n.internetNodes)}
                <hr />
                <hr />
              </S.ListItem>
            </S.ListMenu>
          </CardTechnology>

          <CardTechnology
            layout={2 / 3}
            height="500px"
            mobileHeight="26rem"
            titleColor="var(--sun-L1)"
            image={<GatsbyImage image={getImage(image.cardData)} alt="Test" />}
            fullBg
          />
          <CardTechnology
            layout={2 / 3}
            height="500px"
            mobileHeight="26rem"
            titleColor="var(--sun-L1)"
            image={<GatsbyImage image={getImage(image.cardFlash)} alt="Test" />}
            fullBg
          />
          <CardTechnology
            layout={1 / 3}
            height="500px"
            titleColor="var(--sun-L1)"
            title={intl.formatMessage(i18n.berlinTitle)}
            description={intl.formatMessage(i18n.berlinDescription)}
          />
        </Row>
      </Container>
    </>
  );
};
export const ResponsibilitySection = ({ title, description, image }) => {
  const intl = useIntl();

  return (
    <>
      <S.HeroContainer>
        <Hero image={<GatsbyImage image={getImage(image.header)} alt="Test" />} />
      </S.HeroContainer>
      <Container>
        <div id="tagResponsibilityScrollIndicator" />
        <Spacing height={100} />
        <Row margin="0">
          <TitleDescription
            isReport
            tag={intl.formatMessage(i18n.tagResponsibility)}
            tagColor="#84BE64"
            title={intl.formatMessage(i18n.titleResponsibility)}
            description={intl.formatMessage(i18n.descriptionResponsibility)}
          />
          <RowCard
            layout={1 / 2}
            height={21}
            titleColor="#84BE64"
            title={intl.formatMessage(i18n.gasTitle)}
            image={<GatsbyImage image={getImage(image.cardGas)} alt="Test" />}
          />
          <RowCard
            layout={1 / 2}
            height={21}
            titleColor="#84BE64"
            title={intl.formatMessage(i18n.warmTitle)}
            image={<GatsbyImage image={getImage(image.cardWarm)} alt="Test" />}
          />
          <CardTechnology
            layout={1}
            height="680px"
            image={<GatsbyImage image={getImage(image.cardFlight)} alt="Test" />}
            mobileHeight="26rem"
            fullBg
            titleColor="var(--earth-L1)"
          />
          <RowCard
            layout={1 / 2}
            height={21}
            titleColor="#84BE64"
            title={intl.formatMessage(i18n.coolingTitle)}
            image={<GatsbyImage image={getImage(image.cardCooling)} alt="Test" />}
          />
          <RowCard
            layout={1 / 2}
            height={21}
            titleColor="#84BE64"
            title={intl.formatMessage(i18n.buildingManagementTitle)}
            image={<GatsbyImage image={getImage(image.cardBuildingManagement)} alt="Test" />}
          />
        </Row>
      </Container>
    </>
  );
};
