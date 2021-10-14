import { useStaticQuery, graphql } from 'gatsby';

export const postQuery = () =>
  useStaticQuery(graphql`
    query Post {
      allWpPost(filter: { categories: { nodes: { elemMatch: { slug: { ne: "glossar" } } } } }) {
        nodes {
          id
          slug
          author {
            node {
              firstName
              lastName
              id
            }
          }
          title
          featuredImage {
            node {
              altText
              caption
            }
          }
          modified(formatString: "DD.MM.YY")
          date(formatString: "DD. MMMM YYYY", locale: "de")
          excerpt
          content
          categories {
            nodes {
              id
              slug
              name
            }
          }
        }
      }
    }
  `);
