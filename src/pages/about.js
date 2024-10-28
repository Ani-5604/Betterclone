// pages/about.js

import Link from 'next/link';
import styles from '../styles/AboutUs.module.css';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <header>
        <h1 className={styles.title}>About Better Clone</h1>
        <nav className={styles.navbar}>
          <Link href="/buy" className={styles.buttonLink}>Buy</Link>
          <Link href="/refinance" className={styles.buttonLink}>Refinance</Link>
          <Link href="/heloc" className={styles.buttonLink}>HELOC</Link>
          <Link href="/rates" className={styles.buttonLink}>Rates</Link>
          <Link href="/betterplus" className={styles.buttonLink}>Better+</Link>
          <Link href="/signin" className={styles.buttonLink}>Sign In</Link>
          <Link href="/signin" className={styles.buttonLink}>Continue<span>→</span></Link>    
        </nav>
      </header>
      <main className={styles.mainContent}>
        <section className={styles.intro}>
          <h2>Our mission We’re Making Homeownership Simpler, Faster — and Most Importantly, More Accessible for All Americans.</h2>
          <h3 className={styles.subtitle}>The Status Quo is Broken</h3>
          <p>
            The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent, and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
          </p>
          
          <h3 className={styles.subtitle}>How We’re Changing Things</h3>
          <p>
            Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers.
          </p>
          <p>
            That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.
          </p>
        </section>
        <section className={styles.timeline}>
          <h2>Company Timeline</h2>
          <ul>
            <li><strong>2014:</strong> After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts.</li>
            <li><strong>2015:</strong> Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).</li>
            <li><strong>2016:</strong> Better Mortgage becomes a Fannie Mae approved seller + servicer.</li>
            <li><strong>2017:</strong> Better expands into the real estate market with Better Real Estate.</li>
            <li><strong>2018:</strong> Better Mortgage partners with Ally Bank to build Ally powered by Better.</li>
            <li><strong>2019:</strong> Better Mortgage launches its pilot partnership with American Express.</li>
            <li><strong>2021:</strong> Better acquires Trussle — The UK’s most innovative online mortgage broker.</li>
            <li><strong>2022:</strong> Better Mortgage becomes the first fintech to fund $100B home loans entirely online.</li>
            <li><strong>2023:</strong> Better Mortgage launches One Day Mortgage, going from application to full mortgage Commitment Letter within 24 hours.</li>
          </ul>
        </section>
        <footer className={styles.footer}>
          <p>Today, you become part of the story by joining tens of thousands of happy Better Mortgage borrowers.</p>
        </footer>
      </main>
    </div>
  );
}
