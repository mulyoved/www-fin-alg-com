import * as React from 'react'
import ArticlesPage from '../components/atricles-page'

export default ArticlesPage;

export const query = graphql`
    query RiskDisclosure {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date] },
            filter: {fileAbsolutePath: {regex: "/.*src/articles/misc/risk-disclosure.md/"}}
        ) {
            edges {
                node {
                    html
                }
            }
        }
    }
`;