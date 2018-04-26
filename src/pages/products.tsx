import * as React from 'react'
import ArticlesPage from '../components/atricles-page'

export default ArticlesPage;

export const query = graphql`
    query Producs {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date] },
            filter: {fileAbsolutePath: {regex: "/.*src/articles/products/.*.md/"}}
        ) {
            edges {
                node {
                    html
                }
            }
        }
    }
`;