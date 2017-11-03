import React from 'react'

import styles from './index.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    {/* If you like Phenomic, this is a way to share the love ;) */}
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
          _style="max-width:100px;width:100%;"
          style={{ maxWidth: '100px', width: '100%' }}
          alt="Powered by Contentful"
        />
      </a>
    </div>
  </footer>
)

export default Footer
