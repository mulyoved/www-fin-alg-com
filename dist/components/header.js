"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const gatsby_link_1 = require("gatsby-link");
const Header = ({ siteTitle }) => (React.createElement("div", { style: {
        background: 'rebeccapurple',
        marginBottom: '1.45rem',
    } },
    React.createElement("div", { style: {
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
        } },
        React.createElement("h1", { style: { margin: 0 } },
            React.createElement(gatsby_link_1.default, { to: "/", style: {
                    color: 'white',
                    textDecoration: 'none',
                } }, siteTitle)))));
exports.default = Header;
//# sourceMappingURL=header.js.map