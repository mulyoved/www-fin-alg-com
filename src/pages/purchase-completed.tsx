import * as React from 'react'
import ArticlesPage from '../components/atricles-page'

export default ArticlesPage;

export const query = graphql`
    query PurchaseCompleted {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date] },
            filter: {fileAbsolutePath: {regex: "/.*src/articles/misc/purchase-completed.md/"}}
        ) {
            edges {
                node {
                    html
                }
            }
        }
    }
`;