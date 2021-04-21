import react from 'react';
import styles from '../../styles/Header.module.css'

import Link from 'next/link'
export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.navigation}>
        <Link href="/">
          <span className={styles.logo}>
            <img src="/logo.png" alt="htmelvis web development"/><span style={{ display: 'none'}}>htmelvis</span>
          </span>
        </Link>
        <Link href="/about">about me</Link>
        <Link href="/contact">contact me</Link>
        <Link href="/services">services / work</Link>
      </div>
    </div>
  )
}