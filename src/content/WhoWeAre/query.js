import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

const query = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "image/who-we-are/20211005_who_we_are_header_3860x1440_70%.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      groupMercury: file(relativePath: { eq: "image/who-we-are/groupMercury.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      bigWavyLine: file(relativePath: { eq: "image/who-we-are/bigWavyLine.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `);

  const header = getImage(staticQuery.header);
  const groupMercury = getImage(staticQuery.groupMercury);
  const bigWavyLine = getImage(staticQuery.bigWavyLine);
  return [header, groupMercury, bigWavyLine];
};

export default query;
