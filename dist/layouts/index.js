"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const PropTypes = require("prop-types");
const Helmet = require("react-helmet");
const header_1 = require("../components/header");
require("./index.css");
const Layout = ({ children, data }) => (React.createElement("div", null,
    React.createElement(Helmet, { title: data.site.siteMetadata.title, meta: [
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
        ] }),
    React.createElement(header_1.default, { siteTitle: data.site.siteMetadata.title }),
    React.createElement("div", { style: {
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
        } }, children())));
Layout.propTypes = {
    children: PropTypes.func,
};
exports.default = Layout;
exports.query = graphql `
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
//# sourceMappingURL=index.js.map