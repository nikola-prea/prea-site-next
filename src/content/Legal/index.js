import { useEffect } from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { useStyledDarkMode } from 'gatsby-styled-components-dark-mode';
import { Spacing, PageLayout } from '../../components/Layout';
import { Heading } from '../../components';
import { Paragraph } from '../../components';
import * as S from './style';
import i18n from './i18n';

const LegalOverview = () => {
  const intl = useIntl();
  const { changeThemeSetting, themeSetting } = useStyledDarkMode();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // changeThemeSetting('light');
    }
  }, []);

  return (
    <PageLayout marginTop="3">
      <S.ContentWrapper>
        <Spacing height={140} />
        <S.ContentContainer>
          <S.SectionWrapper>
            <Heading type={2} color="var(--moon-D6)">
              {intl.formatMessage(i18n.legalHeading)}
            </Heading>
            <Spacing height={40} />
            <Heading type={3} color="var(--moon-D6)">
              {intl.formatMessage(i18n.contentHeading)}
            </Heading>
            <Spacing height={40} />
            <Paragraph>{intl.formatMessage(i18n.contentParagrapgh)}</Paragraph>
            <Spacing height={100} />
          </S.SectionWrapper>
          <S.SectionWrapper>
            <Heading type={3} color="var(--moon-D6)">
              {intl.formatMessage(i18n.linkHeading)}
            </Heading>
            <Spacing height={40} />
            <Paragraph>{intl.formatMessage(i18n.linkParagrapgh)}</Paragraph>
            <Spacing height={100} />
          </S.SectionWrapper>
          <S.SectionWrapper>
            <Heading type={3} color="var(--moon-D6)">
              {intl.formatMessage(i18n.copyrightHeading)}
            </Heading>
            <Spacing height={40} />
            <Paragraph>{intl.formatMessage(i18n.copyrightParagrapgh)}</Paragraph>
            <Spacing height={100} />
          </S.SectionWrapper>
        </S.ContentContainer>
      </S.ContentWrapper>
    </PageLayout>
  );
};

export default LegalOverview;
