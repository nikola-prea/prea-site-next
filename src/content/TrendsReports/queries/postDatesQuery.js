import { useStaticQuery, graphql } from 'gatsby';

export const postDatesQuery = () =>
  useStaticQuery(graphql`
    query PostDates {
      allWpPost(filter: { categories: { nodes: { elemMatch: { slug: { ne: "glossar" } } } } }) {
        nodes {
          modified(formatString: "YYYY")
          date(formatString: "YYYY", locale: "de")
        }
      }
    }
  `);
