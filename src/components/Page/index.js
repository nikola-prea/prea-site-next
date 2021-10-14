import { useContext } from 'react';

import styled, { ThemeContext } from 'styled-components';
// import { useIntl } from 'gatsby-plugin-intl';
import SEO from './SEO';

import GlobalStyle from '../../../styles/global';

/* import '../../../public/style.css'; */

import DefaultLayout, { BlogLayout, HardSubLayout } from './defaultLayout';

const layoutTypes = {
  default({ children, isFixedHeader }) {
    return <DefaultLayout isFixedHeader={isFixedHeader}>{children}</DefaultLayout>;
  },

  hardSub({ children }) {
    return <HardSubLayout>{children}</HardSubLayout>;
  },

  blog({ children }) {
    return <BlogLayout>{children}</BlogLayout>;
  },
};

const Page = ({ title, description, meta, layoutType = 'default', children, isBlog = false, isFixedHeader }) => {
  // const intl = useIntl();
  const theme = useContext(ThemeContext);
  const Layout = layoutTypes[layoutType];

  return (
    <>
      {isBlog ? (
        <SEO title={title} description={description} meta={meta} />
      ) : (
        <SEO title={title || ''} description={description || ''} meta={meta} />
      )}

      {/* <GlobalStyle theme={theme} /> */}

      <Layout isFixedHeader={isFixedHeader}>{children}</Layout>
    </>
  );
};

const ChildrenWrapper = styled.div`
  margin-top: ${({ marginTop }) => marginTop};
`;

export default Page;
