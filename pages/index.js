import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import CharacterInput from "./Unicode";
import AsciiCodeFinder from "./ASCIIcode";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ASCII | Unicode </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="styles.css" />
      </Head>
      <main className={styles.main}>
        <div>
          <CharacterInput />
          <AsciiCodeFinder />
        </div>
      </main>
    </>
  );
}
