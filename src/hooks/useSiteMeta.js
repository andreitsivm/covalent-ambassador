import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          author
          title
          siteUrl
          description
          currentYear
          foundationYear
          copyright
          twitter
          facebook
          youtube
          publisherEmail
          disclaimer
          address
        }
      }
    }
  `);

  return site.siteMetadata;
};

export default useSiteMetadata;
