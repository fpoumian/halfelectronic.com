import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ContentBody from 'components/ContentBody/'
import Container from 'components/Container/'
import GenericHeader from 'components/GenericHeader'
import Cover from 'components/Cover'

class About extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <Cover>
          <GenericHeader title={`About`} />
        </Cover>

        <Container
          style={{
            marginTop: '8vh',
            marginBottom: '8vh',
          }}
        >
          <ContentBody
            body={`
            <h2>Who Am I?</h2>
            <p>Duis irure fugiat ea ea. Irure ipsum elit ullamco fugiat deserunt
            dolor tempor proident consequat do amet. Commodo culpa esse elit
            duis quis aliqua irure sunt qui officia enim ea velit et. Sunt
            consectetur pariatur esse quis do pariatur tempor elit consequat ea.
            Magna adipisicing ea consequat sunt anim Lorem incididunt ipsum.
            Aliqua dolor occaecat pariatur esse cillum exercitation deserunt.
            Magna velit deserunt esse sit exercitation quis elit dolore ea
            nostrud nisi velit dolore.</p>
            `}
          />
        </Container>
      </div>
    )
  }
}

About.propTypes = {
  data: PropTypes.object,
}

export default About
