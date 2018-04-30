import * as React from 'react'
import FAQPage from '../components/faq-page'

const TPOChartFAQ = ({data}) => (
  <FAQPage
    title="TPO and Volume Profile Chart Frequently Asked Questions"
    data={data}
  />
)

export default TPOChartFAQ;

export const query = graphql`
  query TPOChartFAQ {
    allMarkdownRemark(
      sort: { fields: [frontmatter___order] }
      filter: {
        fileAbsolutePath: {
          regex: "/.*src/articles/tpochart-faqs/.*.md/"
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
