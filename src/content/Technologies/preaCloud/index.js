import { useIntl } from 'gatsby-plugin-intl';
import { MainHero, PageWrapper } from '../style';
import { PageLayout } from '../../../components/Layout';

const PreaCloudOverview = () => {
  const intl = useIntl();

  return <PageLayout isDark>PREA Cloud</PageLayout>;
};

export default PreaCloudOverview;
