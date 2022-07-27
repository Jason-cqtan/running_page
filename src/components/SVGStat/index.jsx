import React from 'react';
import GitHubSvg from 'assets/github.svg';
import GridSvg from 'assets/grid.svg';
import styles from './style.module.scss';

const SVGStat = () => (
  <div className={styles.width100}>
    <GitHubSvg className={styles.runSVG} />
    <GridSvg className={styles.runSVG2}/>
  </div>
);

export default SVGStat;
