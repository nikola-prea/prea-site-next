import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

const query = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "image/technologies/PREA_Technology_Header_long_3480x2600_v1.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }

      teaserOne: file(relativePath: { eq: "image/technologies/teaserOne.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      teaserTwo: file(relativePath: { eq: "image/technologies/PREA_Cloud_tech_inside_800x800.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `);
  const header = getImage(staticQuery.header);
  const teaserOneImage = getImage(staticQuery.teaserOne);
  const teaserTwoImage = getImage(staticQuery.teaserTwo);

  return [header, teaserOneImage, teaserTwoImage];
};

export default query;
