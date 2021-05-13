import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";
import Helmet from "react-helmet";
import { Global, css } from "@emotion/react";

import theme from "../../theme";

import useSiteMetadata from "Hooks/useSiteMeta";

import Header from "Components/header";
import Footer from "Components/footer";

const Page = ({
  children,
  title,
  description,
  canonical,
  googleVerification,
  noindex,
  location,
  ...rest
}) => {
  const { author, publisherEmail, publisherUrl, copyright } = useSiteMetadata();

  return (
    <Fragment>
      <Global
        styles={css`
          body {
            padding: 0;
            margin: 0;
            color: ${theme.colors.basic[5]};
            font-family: ${theme.fonts.body};
            font-size: ${theme.fontSizes.body};
            line-height: ${theme.lineHeights.body};
            min-width: 320px;
          }

          html,
          body,
          #___gatsby,
          #gatsby-focus-wrapper {
            height: 100%;
          }

          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          #gatsby-noscript {
            width: 100%;
            padding: 4px 0;
            display: block;
            background-color: #fff88d;
            text-align: center;
            position: fixed;
            bottom: 0;
            font-size: 0.875rem;
            z-index: 9999;
          }
        `}
      />

      <Helmet>
        <html lang="en" />
        <meta name="author" content={author} />
        <meta name="copyright" content={copyright} />
        <meta name="publisher-email" content={publisherEmail} />
        <meta name="publisher-url" content={publisherUrl} />
        <meta name="description" content={description} />
        {googleVerification && (
          <meta name="google-site-verification" content={googleVerification} />
        )}
        {canonical && <link rel="canonical" href={canonical} />}
        {noindex && <meta name="robots" content="noindex, follow" />}
        <title>{title}</title>
      </Helmet>

      <Box
        display="table"
        width="100%"
        height="100%"
        sx={{
          tableLayout: "fixed",
        }}
      >
        <Header />

        <Box display="table-row" height="100%" {...rest}>
          <Box pt="82px">{children}</Box>
        </Box>

        <Footer />
      </Box>
    </Fragment>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.shape({
    href: PropTypes.string,
  }).isRequired,
  canonical: PropTypes.string,
  noindex: PropTypes.bool,
};

Page.defaultProps = {
  canonical: "",
  noindex: false,
};

export default Page;
