import { useIntl } from 'gatsby-plugin-intl';
import { Container, PageLayout, Row, Spacing } from '../../../components/Layout';
import SubHeader from '../../../components/Modules/SubHeader/SubHeader';
import i18n from '../i18n';
import TeamCards from './components/TeamCards';
import HeaderContent from '../../../components/Modules/Header/HeaderContent';

const TeamOverview = () => {
  const intl = useIntl();
  return (
    <PageLayout isDark={false}>
      <SubHeader top="0" brand={intl.formatMessage(i18n.teamSubHeaderBrand)} />
      <HeaderContent
        isDark={false}
        title={intl.formatMessage(i18n.teamSubHeaderBrand)}
        subTitle={intl.formatMessage(i18n.teamHeaderSubTitle)}
        description={intl.formatMessage(i18n.teamHeaderDescription)}
      />
      <Spacing height={60} />
      <Container>
        <TeamCards />
      </Container>
    </PageLayout>
  );
};

export default TeamOverview;
