import { useStaticQuery, graphql } from 'gatsby';

export const postCategoriesQuery = () =>
  useStaticQuery(graphql`
    query {
      allWpCategory(
        filter: { name: { nin: ["Glossar", "Debt & Equity Financing", "Investment- & Assetmanagement", "Invest"] } }
      ) {
        nodes {
          id
          name
          slug
          parentId
          posts {
            nodes {
              id
              slug
              author {
                node {
                  firstName
                  lastName
                }
              }
              title
              featuredImage {
                node {
                  altText
                  caption
                  sizes
                }
              }
              date(formatString: "DD. MMMM YYYY", locale: "de")
              modified(formatString: "DD.MM.YY")
              content
            }
          }
        }
      }
    }
  `);
