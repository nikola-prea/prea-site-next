import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

const query = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "image/technologies/mercury/mercuryHeaderImg.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }

      teaserOneFirstImg: file(relativePath: { eq: "image/technologies/mercury/mapGermany3.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      teaserOneSecondImg: file(relativePath: { eq: "image/technologies/mercury/mapGermany2.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      teaserOneThirdImg: file(relativePath: { eq: "image/technologies/mercury/mapGermany.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }

      teaserTwoFirstImg: file(relativePath: { eq: "image/technologies/mercury/clustering3.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      teaserTwoSecondImg: file(relativePath: { eq: "image/technologies/mercury/clustering2.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      teaserTwoThirdImg: file(relativePath: { eq: "image/technologies/mercury/clustering.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }

      teaserThreeFirstImage: file(relativePath: { eq: "image/technologies/mercury/DVWP2.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      teaserThreeSecondImage: file(relativePath: { eq: "image/technologies/mercury/DVWP.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }

      teaserFourFirstImg: file(relativePath: { eq: "image/technologies/mercury/forecasting5.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      teaserFourSecondImg: file(relativePath: { eq: "image/technologies/mercury/forecasting4.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      teaserFourThirdImg: file(relativePath: { eq: "image/technologies/mercury/forecasting.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      teaserFiveFirstImg: file(relativePath: { eq: "image/technologies/mercury/valuation.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `);
  const header = getImage(staticQuery.header);
  const teaserOneFirstImg = getImage(staticQuery.teaserOneFirstImg);
  const teaserOneSecondImg = getImage(staticQuery.teaserOneSecondImg);
  const teaserOneThirdImg = getImage(staticQuery.teaserOneThirdImg);

  const teaserTwoFirstImg = getImage(staticQuery.teaserTwoFirstImg);
  const teaserTwoSecondImg = getImage(staticQuery.teaserTwoSecondImg);
  const teaserTwoThirdImg = getImage(staticQuery.teaserTwoThirdImg);

  const teaserThreeFirstImage = getImage(staticQuery.teaserThreeFirstImage);
  const teaserThreeSecondImage = getImage(staticQuery.teaserThreeSecondImage);

  const teaserFourFirstImg = getImage(staticQuery.teaserFourFirstImg);
  const teaserFourSecondImg = getImage(staticQuery.teaserFourSecondImg);
  const teaserFourThirdImg = getImage(staticQuery.teaserFourThirdImg);

  const teaserFiveFirstImg = getImage(staticQuery.teaserFiveFirstImg);
  return {
    header,
    teaserOneFirstImg,
    teaserOneSecondImg,
    teaserOneThirdImg,
    teaserTwoFirstImg,
    teaserTwoSecondImg,
    teaserTwoThirdImg,
    teaserThreeFirstImage,
    teaserThreeSecondImage,
    teaserFourFirstImg,
    teaserFourSecondImg,
    teaserFourThirdImg,
    teaserFiveFirstImg,
  };
};

export default query;
