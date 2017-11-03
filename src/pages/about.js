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
            <p>
              My name is Fernando Poumián. I'm a full-stack web engineer with 5+ years of experience.
              I specialize in creating modern, effective and scalable web solutions to the everyday challenges of this digital era.
              I have a Computer Information Systems degree from the University of Texas at El Paso where I graduated with honors in 2012.
              </p>
              
              <p>As a freelancer and independent consultant, I have worked with clients from all over the world, including the US, Spain, 
                New Zealand and México — where I also currently reside. </p>
              
              <p>
              I believe that good software development consist in using the right tool for the job. 
              In my years of experience I have studied and worked with a wide variety of 
              programming languages such as C#, Java, JavaScript, Python, Ruby and PHP, as well as with traditional 
              MVC oriented frameworks and architectures such as Django, Ruby on Rails and Laravel.
              </p>
              
              <p>
                Nowadays, however, most of my stack is based around the ever growing Node.js/Javascript ecosystem. 
                I'm a huge React enthusiast, and you will likely find me rambling about React at one point or another. 
                This, in turn, has also sparked my interest in alternative programming and architectural paradigms 
                such as Functional Programming and Serverless Architectures.
              </p>
              
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
