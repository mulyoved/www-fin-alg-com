import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'title', content: "Financial Algorithms, NinjaTrader and other programming services" },
        { name: 'description', content: 'Final, Financial Algorithms, programming services for hedge funds and retail traders, NinjaTrader and others' },
        { name: 'keywords', content: 'Financial Algorithms,Final,Trading,Stock,Futures,Forex,NinjaTrader,TradeStation,eSignal,MetaTrader,MarketProfile,MaketBalance,Volume Footprint,TPO,Value Area,POC,Automatic Strategies,Programming,Indicators,Strategies' },
        { name: 'author', content: "Muly Oved" }

      ]}
    >
      <html lang="en" />
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
