import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

const query = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      header: file(
        relativePath: { eq: "image/services/real-estate-transaction/PREA_Real_Estate_Transaction_3840x1440.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      teaserOne: file(relativePath: { eq: "image/services/real-estate-transaction/teaserOne.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      teaserTwo: file(relativePath: { eq: "image/services/real-estate-transaction/teaserTwo.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }

      circlesFirstImage: file(
        relativePath: { eq: "image/services/real-estate-transaction/PREA_Real_Estate_Transaction_assetValuation.png" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      circlesSecondImage: file(
        relativePath: { eq: "image/services/real-estate-transaction/PREA_Real_Estate_Transaction_matching.png" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      circlesThirdImage: file(
        relativePath: { eq: "image/services/real-estate-transaction/PREA_Real_Estate_Transaction_dataRoom.png" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      circlesFourthImage: file(
        relativePath: { eq: "image/services/real-estate-transaction/PREA_Real_Estate_Transaction_dueDiligence.png" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      circlesFifthImage: file(
        relativePath: { eq: "image/services/real-estate-transaction/PREA_Real_Estate_Transaction_signing.png" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `);
  const header = getImage(staticQuery.header);
  const teaserOneImage = getImage(staticQuery.teaserOne);
  const teaserTwoImage = getImage(staticQuery.teaserTwo);

  const circlesFirstImage = getImage(staticQuery.circlesFirstImage);
  const circlesSecondImage = getImage(staticQuery.circlesSecondImage);
  const circlesThirdImage = getImage(staticQuery.circlesThirdImage);
  const circlesFourthImage = getImage(staticQuery.circlesFourthImage);
  const circlesFifthImage = getImage(staticQuery.circlesFifthImage);

  return {
    header,
    teaserOneImage,
    teaserTwoImage,
    circlesFirstImage,
    circlesSecondImage,
    circlesThirdImage,
    circlesFourthImage,
    circlesFifthImage,
  };
};

export default query;
