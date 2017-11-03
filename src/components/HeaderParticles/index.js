import React from 'react'
import Particles from 'react-particles-js'
import config from './particlesjs-config.json'

const HeaderParticles = () => {
  const particlesStyles = {
    background: 'transparent',
    position: 'absolute',
    left: '0',
    top: '0',
    zIndex: '0',
  }
  return (
    <Particles
      params={config}
      width="2500px"
      height="685px"
      style={particlesStyles}
    />
  )
}

export default HeaderParticles
