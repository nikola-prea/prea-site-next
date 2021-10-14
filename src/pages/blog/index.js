// import { useStyledDarkMode } from 'gatsby-styled-components-dark-mode';

import { ApolloProvider } from '@apollo/client';
import { useEffect } from 'react';
// import { defineMessages } from 'react-intl';
// import { useIntl } from 'gatsby-plugin-intl';
import Page from '../../components/Page';
import BlogOverview from '../../content/TrendsReports/Blog';
import { client } from '../../services/apollo/client';

// const i18n = defineMessages({
//   title: 'Trends & Reports | PREA',
//   description:
//     'Mit PREA sind Sie schneller am Ziel. Wir sind ein extrem leistungsstarkes Team mit fortschrittlichster Technologie und superschnelle Abwicklungen.',
// });

const ReportsTrendsPage = () => {
  // const { isDark, toggleDark } = useStyledDarkMode();
  // const intl = useIntl();

  // useEffect(() => {
  //   if (!isDark) {
  //     toggleDark();
  //   }
  // }, []);
  return (
    <ApolloProvider client={client}>
      <Page
      layoutType="default"
      title={'Trends & Reports | PREA'}
      description={'Mit PREA sind Sie schneller am Ziel. Wir sind ein extrem leistungsstarkes Team mit fortschrittlichster Technologie und superschnelle Abwicklungen.'}>
      <BlogOverview />
    </Page>
    </ApolloProvider>
  );
};

export default ReportsTrendsPage;
