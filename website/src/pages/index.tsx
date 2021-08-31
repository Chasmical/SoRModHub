import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import useThemeContext from '@theme/hooks/useThemeContext';
import Logo from '@site/static/img/logo.png';
import LogoDark from '@site/static/img/logo-dark.png';
import Translate, { translate } from '@docusaurus/Translate';

import ShowcaseItem from '@site/src/components/ShowcaseItem';
import ModList from './mods';

function HomepageHeader() {
  const { isDarkTheme } = useThemeContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{padding:"2rem 0"}}>
      <div className="container">
        {false &&
          <img src={isDarkTheme ? LogoDark : Logo} width='20%'/>
        }
        <p className="hero__subtitle" style={{fontSize:"3rem", fontWeight:600, filter: "invert(100%)"}}>
          <Translate id="homepage.tagline">
            Streets of Rogue Mod Hub
          </Translate>
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Streets of Rogue Mods">
      <HomepageHeader/>
      <main style={{width:'85%', marginLeft:'auto', marginRight:'auto', padding:'1rem', display:"flex", flexWrap: "wrap", alignItems:"flex-start"}}>
        {ModList.map(m => <ShowcaseItem {...m}/>)}
      </main>
    </Layout>
  );
}
