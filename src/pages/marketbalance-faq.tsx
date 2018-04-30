import * as React from 'react'
import FAQPage from '../components/faq-page'


const MarketBalanceFAQ = ({data}) => (
  <FAQPage
    title="MarketBalance Frequently Asked Questions"
    data={data}
  />
)

export default MarketBalanceFAQ;

export const query = graphql`
  query MarketBalanceFAQ {
    allMarkdownRemark(
      sort: { fields: [frontmatter___order] }
      filter: {
        fileAbsolutePath: {
          regex: "/.*src/articles/market-balance-faqs/.*.md/"
        }
      }
    ) {
      edges {
        node {
          html
          frontmatter {
              title
          }
        }
      }
    }
  }
`
