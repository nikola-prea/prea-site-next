import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

const query = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "image/services/real-estate-development/header_realEstateDevelopment.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      tileOne: file(relativePath: { eq: "image/services/real-estate-development/realEstateDevelopment_tileOne.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      imageWithText_de: file(
        relativePath: { eq: "image/services/real-estate-development/PREA_services_development_inside_3840x1440_de.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 100)
        }
      }
      imageWithText_en: file(
        relativePath: { eq: "image/services/real-estate-development/PREA_services_development_inside_3840x1440_en.jpg" }
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
    }
  `);
  const header = getImage(staticQuery.header);
  const teaserOneImage = getImage(staticQuery.teaserOne);
  const teaserTwoImage = getImage(staticQuery.teaserTwo);
  const imageWithText_de = getImage(staticQuery.imageWithText_de);
  const imageWithText_en = getImage(staticQuery.imageWithText_en);

  return {
    header,
    teaserOneImage,
    teaserTwoImage,
    imageWithText_de,
    imageWithText_en,
  };
};

export default query;
