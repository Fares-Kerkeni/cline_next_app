"use client";
import Link from "next/link";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <main className={styles.main}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/page1">page1</Link>
        </li>
        <li>
          <Link href="/page2">page2</Link>
        </li>
      </ul>
    </main>
  );
}
