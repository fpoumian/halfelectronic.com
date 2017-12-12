import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ContentBody from 'components/ContentBody/'
import ContentWrapper from 'components/ContentWrapper/'
import GenericHeader from 'components/GenericHeader'
import Cover from 'components/Cover'
import Button from 'components/Button'

class About extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <Cover>
          <GenericHeader title={`😱 Oooops!`} />
        </Cover>

        <ContentWrapper
          style={{
            marginTop: '8vh',
            marginBottom: '8vh',
          }}
        >
          <ContentBody
            style={{
              textAlign: 'center',
            }}
            body={`
            <h2>Page Not Found</h2>
            <p>Looks like you reached a page that does not exist yet.</p>                       
            `}
          />
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <Button link="/">{`Go back to Home ➔`}</Button>
          </div>
        </ContentWrapper>
      </div>
    )
  }
}

About.propTypes = {
  data: PropTypes.object,
}

export default About
