import * as React from 'react'
import ArticlesPage from '../components/atricles-page'

export default ArticlesPage;

export const query = graphql`
    query MarketBalanceGuide {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date] },
            filter: {fileAbsolutePath: {regex: "/.*src/articles/misc/market-balance-guide.md/"}}
        ) {
            edges {
                node {
                    html
                }
            }
        }
    }
`;