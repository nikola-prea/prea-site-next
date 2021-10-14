import { useEffect } from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { useStyledDarkMode } from 'gatsby-styled-components-dark-mode';
import { ExternalLink } from '../../components/Atoms/TextLink';
import { Spacing, PageLayout } from '../../components/Layout';
import { Heading } from '../../components';
import { Paragraph } from '../../components';
import i18n from './i18n';
import * as S from './style';

const LegalOverview = () => {
  const intl = useIntl();
  const { changeThemeSetting } = useStyledDarkMode();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      changeThemeSetting('light');
    }
  }, []);

  return (
    <PageLayout marginTop="3">
      <Spacing height={100} />
      <S.MainContainerWrapper>
        <S.MainContainerContent>
          <S.CustomHeading>
            <Heading type={2} color="var(--moon_D6)">
              {intl.formatMessage(i18n.imprintHeading)}
            </Heading>
          </S.CustomHeading>
          <Spacing height={40} />
          <Heading type={3} color="var(--moon_D6)">
            {intl.formatMessage(i18n.imprintLawNotice)}
          </Heading>
          <Spacing height={40} />
          <S.ContentWrapper>
            <S.SectionWrapper>
              <S.SkyParagraph>
                <Paragraph type={1}>{intl.formatMessage(i18n.headquarter)}</Paragraph>
                <ExternalLink
                  type={1}
                  path="http://www.google.com/maps/place/PREA+Group+GmbH/@52.24078,13.42096,15z/data=!4m5!3m4!1s0x0:0x204c81039d3a53c3!8m2!3d52.2406864!4d13.4212371">
                  <strong>PREA Group GmbH</strong> <br /> Zum Königsgraben 2 <br /> 15806 Zossen
                </ExternalLink>
              </S.SkyParagraph>
            </S.SectionWrapper>

            <S.SectionWrapper>
              <S.SkyParagraph>
                <Paragraph type={1}>{intl.formatMessage(i18n.officeBerlin)}</Paragraph>
                <ExternalLink
                  type={1}
                  path="http://www.google.com/maps/place/Potsdamer+Platz+1,+10785+Berlin/@52.5090075,13.3723369,17z/data=!3m1!4b1!4m5!3m4!1s0x47a851c96f5e317d:0xe6af7d1ded4c3e15!8m2!3d52.5090075!4d13.3745309">
                  <strong>PREA Group GmbH</strong> <br /> Potsdamer Platz 1 <br /> 10785 Berlin
                </ExternalLink>
              </S.SkyParagraph>
            </S.SectionWrapper>

            <S.SectionWrapper>
              <Paragraph type={1}>
                {intl.formatMessage(i18n.phone)}
                <ExternalLink type="tel" path="0049 3377 20690 21">
                  0049 3377 20690 21
                </ExternalLink>
              </Paragraph>
              <Paragraph type={1}>
                {intl.formatMessage(i18n.phone)}
                <ExternalLink type="tel" path="0049 30 311977 77">
                  0049 30 311977 77
                </ExternalLink>
              </Paragraph>
              <Paragraph type={1}>
                {intl.formatMessage(i18n.email)}
                <ExternalLink type="mail" path="contact@prea.eu">
                  contact@prea.eu
                </ExternalLink>
              </Paragraph>
            </S.SectionWrapper>

            <S.SectionWrapper>
              <Paragraph type={1} isBold>
                {intl.formatMessage(i18n.management)}
              </Paragraph>
              <Paragraph type={1}>Gabriel Khodzitski</Paragraph>
            </S.SectionWrapper>
            <S.SectionWrapper>
              <Paragraph type={1} isBold>
                {intl.formatMessage(i18n.commercialRegister)}
              </Paragraph>
              <Paragraph type={1}>HRB 32815</Paragraph>
            </S.SectionWrapper>
            <S.SectionWrapper>
              <Paragraph type={1} isBold>
                {intl.formatMessage(i18n.registryCourt)}
              </Paragraph>
              <Paragraph type={1}>Amtsgericht Potsdam</Paragraph>
            </S.SectionWrapper>

            <S.SectionWrapper>
              <Paragraph type={1} isBold>
                {intl.formatMessage(i18n.VATNumber)}
              </Paragraph>
              <Paragraph type={1}>gemäß §27 a Umsatzsteuergesetz</Paragraph>
              <Paragraph type={1}>DE 326 223 758</Paragraph>
            </S.SectionWrapper>
            <S.SectionWrapper>
              <Paragraph type={1} isBold>
                {intl.formatMessage(i18n.permission)}
              </Paragraph>
              <ExternalLink
                type={1}
                path="https://www.google.com/maps/place/Stadt+Zossen/@52.2157466,13.4469889,16z/data=!4m5!3m4!1s0x0:0xc383ea594ac959aa!8m2!3d52.2158881!4d13.4494012">
                <S.SkyParagraph>Stadtverwaltung der Stadt Zossen</S.SkyParagraph>
                <S.SkyParagraph>Marktplatz 20</S.SkyParagraph>
                <S.SkyParagraph>15806 Zossen</S.SkyParagraph>
              </ExternalLink>
              <br />
              <ExternalLink type={1} path="http://www.zossen.de">
                www.zossen.de
              </ExternalLink>
            </S.SectionWrapper>

            <S.SectionWrapper>
              <Paragraph type={1} isBold>
                {intl.formatMessage(i18n.technicalContact)}
              </Paragraph>
              <Paragraph type={1}>{intl.formatMessage(i18n.contact)} Marco Foof</Paragraph>
              <Paragraph type={1}>
                {intl.formatMessage(i18n.phone)}{' '}
                <ExternalLink type="tel" path="0049 3377 20690 132">
                  0049 3377 20690 132
                </ExternalLink>
              </Paragraph>
              <Paragraph type={1}>
                {intl.formatMessage(i18n.phone)}{' '}
                <ExternalLink type="tel" path="0049 30 311 977 22">
                  0049 30 311 977 22
                </ExternalLink>
              </Paragraph>
              <Paragraph type={1}>
                {intl.formatMessage(i18n.email)}{' '}
                <ExternalLink type="mail" path="admin@prea.eu">
                  admin@prea.eu
                </ExternalLink>
              </Paragraph>
            </S.SectionWrapper>

            <S.SectionWrapper>
              <Paragraph type={1} isBold>
                {intl.formatMessage(i18n.pressContact)}
              </Paragraph>
              <Paragraph type={1}>{intl.formatMessage(i18n.contact)} Jasper Radü (PB3C GmbH)</Paragraph>
              <Paragraph type={1}>
                {intl.formatMessage(i18n.phone)}{' '}
                <ExternalLink type="tel" path="0049 40 540908 421">
                  0049 40 540908 421
                </ExternalLink>
              </Paragraph>
              <Paragraph type={1}>
                {intl.formatMessage(i18n.fax)}{' '}
                <ExternalLink type="fax" path="0049 30 726276 163">
                  0049 30 726276 163
                </ExternalLink>
              </Paragraph>
              <Paragraph type={1}>
                {intl.formatMessage(i18n.email)}{' '}
                <ExternalLink type="mail" path="radue@pb3c.com">
                  radue@pb3c.com
                </ExternalLink>
              </Paragraph>
            </S.SectionWrapper>

            <S.SectionWrapper>
              <Paragraph type={1} isBold>
                {intl.formatMessage(i18n.marketingContact)}
              </Paragraph>
              <Paragraph type={1}>{intl.formatMessage(i18n.contact)} Christoph Kückner</Paragraph>
              <Paragraph type={1}>
                {intl.formatMessage(i18n.phone)}{' '}
                <ExternalLink type="tel" path="0049 30 311977 33">
                  0049 30 311977 33
                </ExternalLink>
              </Paragraph>
              <Paragraph type={1}>
                {intl.formatMessage(i18n.email)}{' '}
                <ExternalLink type="mail" path="marketing@prea.eu">
                  marketing@prea.eu
                </ExternalLink>
              </Paragraph>
            </S.SectionWrapper>

            <Spacing height={100} />
            <S.SectionWrapper>
              <Heading color="var(--moon_D6)" type={3}>
                {intl.formatMessage(i18n.disputeResolutionHeading)}
              </Heading>
              <Spacing height={40} />
              <Paragraph type={1}>
                {intl.formatMessage(i18n.disputeResolutionParagraph1)}
                <ExternalLink type={1} path="https://ec.europa.eu/consumers/odr">
                  {intl.formatMessage(i18n.disputeResolutionLink)}
                </ExternalLink>
                {intl.formatMessage(i18n.disputeResolutionDot)}
                {intl.formatMessage(i18n.disputeResolutionParagraph2)}
              </Paragraph>
            </S.SectionWrapper>
          </S.ContentWrapper>
        </S.MainContainerContent>
      </S.MainContainerWrapper>
      <Spacing height={100} />
    </PageLayout>
  );
};

export default LegalOverview;
