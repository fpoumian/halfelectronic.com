import React from "react"

import styles from "./index.pcss"

const Footer = () =>
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
        <span className={styles.phenomicReferenceName}>
          {`React`}
        </span>
      </a>
      {` and `}
      <a
        target="__blank"
        href={process.env.PHENOMIC_HOMEPAGE}
        className={styles.phenomicReference}
      >
        <span className={styles.phenomicReferenceName}>
          {`<${process.env.PHENOMIC_NAME} />`}
        </span>
      </a>
    </div>
  </footer>

export default Footer
