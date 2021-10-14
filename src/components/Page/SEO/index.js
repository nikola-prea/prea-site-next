/**
 *
 * SEO configuration
 */

import React from 'react';
import { Helmet } from 'react-helmet';
// import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ description = '', lang = 'en', meta = [], title }) => {
  // const { site } = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //           description
  //           keywords
  //         }
  //       }
  //     }
  //   `,
  // );

  // const metaDescription = description || site.siteMetadata.description || "Description";
  // const defaultTitle = site?.siteMetadata?.title || "TITLE";
  const defaultTitle = "TITLE";

  // const siteKeywords = site.siteMetadata.keywords;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        // {
        //   name: 'description',
        //   content: metaDescription,
        // },
        // {
        //   name: 'keywords',
        //   content: siteKeywords,
        // },
        // {
        //   property: 'og:title',
        //   content: title,
        // },
        // {
        //   property: 'og:description',
        //   content: metaDescription,
        // },
        // {
        //   property: 'og:type',
        //   content: 'website',
        // },
        // {
        //   name: 'twitter:card',
        //   content: 'summary',
        // },
        // {
        //   name: 'twitter:creator',
        //   content: site.siteMetadata?.author || '',
        // },
        // {
        //   name: 'twitter:title',
        //   content: title,
        // },
        // {
        //   name: 'twitter:description',
        //   content: metaDescription,
        // },
      ].concat(meta)}
    />
  );
};

export default SEO;
