import { useEffect } from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { useStyledDarkMode } from 'gatsby-styled-components-dark-mode';
import { Spacing, PageLayout } from '../../components/Layout';
import { Heading } from '../../components';
import { Paragraph } from '../../components';
import * as S from './style';
import i18n from './i18n';

const PrivacyOverview = () => {
  const intl = useIntl();
  const { changeThemeSetting } = useStyledDarkMode();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      changeThemeSetting('light');
    }
  }, []);

  return (
    <PageLayout marginTop="3">
      <S.ContainerWrapper>
        <Spacing height={140} />
        <Heading color="var(--moon-D6)" type={2}>
          {intl.formatMessage(i18n.privacyHeading)}
        </Heading>
        <Spacing height={40} />
        <Paragraph color="var(--moon-D6)" type={2}>
          {intl.formatMessage(i18n.privacyParagraph)}
        </Paragraph>
        <Spacing height={100} />
        <Heading color="var(--moon-D6)" type={3}>
          {intl.formatMessage(i18n.privacyOneView)}
        </Heading>
        <Spacing height={40} />
        <Heading color="var(--moon-D6)" type={4}>
          {intl.formatMessage(i18n.generalInformation)}
        </Heading>
        <Spacing height={40} />
        <Paragraph color="var(--moon-D6)">{intl.formatMessage(i18n.generalInformationParagraph)}</Paragraph>
        <Spacing height={100} />
        <Heading color="var(--moon-D6)" type={4}>
          {intl.formatMessage(i18n.dataFetchingOfWebsite)}
        </Heading>
        <Spacing height={40} />
        <Paragraph color="var(--moon-D6)" isBold>
          {intl.formatMessage(i18n.responsibleForDatafetching)}
        </Paragraph>
        <Paragraph color="var(--moon-D6)">{intl.formatMessage(i18n.responsibleForDatafetchingParagraph)}</Paragraph>
        <Spacing height={60} />
        <Paragraph color="var(--moon-D6)" isBold>
          {intl.formatMessage(i18n.howCollectData)}
        </Paragraph>
        <Paragraph color="var(--moon-D6)">{intl.formatMessage(i18n.howCollectDataParagraph)}</Paragraph>
        <Spacing height={60} />
        <Paragraph color="var(--moon-D6)" isBold>
          {intl.formatMessage(i18n.usageData)}
        </Paragraph>
        <Paragraph color="var(--moon-D6)">{intl.formatMessage(i18n.usageDataParagraph)}</Paragraph>
        <Spacing height={60} />
        <Paragraph color="var(--moon-D6)" isBold>
          {intl.formatMessage(i18n.usageData)}
        </Paragraph>
        <Paragraph color="var(--moon-D6)">{intl.formatMessage(i18n.usageDataParagraph)}</Paragraph>
        <Spacing height={60} />
        <Paragraph color="var(--moon-D6)" isBold>
          {intl.formatMessage(i18n.dataRights)}
        </Paragraph>
        <Paragraph color="var(--moon-D6)">{intl.formatMessage(i18n.dataRightsParagraph)}</Paragraph>
        <Spacing height={100} />
      </S.ContainerWrapper>
    </PageLayout>
  );
};

export default PrivacyOverview;
