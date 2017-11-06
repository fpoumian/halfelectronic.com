import React from 'react'

import styles from './index.module.css'
import NetlifyLogo from './netlify.svg'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.info}>
      <span className={styles.copyright}>
        Copyright &copy; Fernando Poumián • 2017 All rights reserved.
      </span>
      <span className="">Developed by Fernando Poumian. Built with </span>

      <a
        target="__blank"
        href="https://facebook.github.io/react/"
        className={styles.phenomicReference}
      >
        <span className={styles.phenomicReferenceName}>{`React`}</span>
      </a>
      {` and `}
      <a
        target="__blank"
        href={`http://gatsbyjs.org/`}
        className={styles.phenomicReference}
      >
        <span className={styles.phenomicReferenceName}>{`Gatsby.js`}</span>
      </a>
    </div>
    <div style={{ marginTop: '1rem' }}>
      <a
        href="https://www.contentful.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://images.contentful.com/fo9twyrwpveg/7F5pMEOhJ6Y2WukCa2cYws/398e290725ef2d3b3f0f5a73ae8401d6/PoweredByContentful_DarkBackground.svg"
          style={{ maxWidth: '100px', width: '100%' }}
          alt="Powered by Contentful"
        />
      </a>
      <a
        href="https://www.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginLeft: '1rem' }}
      >
        <img
          src={NetlifyLogo}
          style={{ maxWidth: '100px', width: '100%' }}
          alt="Hosted on Netlify"
        />
      </a>
    </div>
  </footer>
)

export default Footer
