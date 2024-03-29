import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.pbContainer}>
          <div className={styles.gradient} />
          <Image
            className={styles.pb}
            src="/img/pb.png"
            alt="a"
            width={300}
            height={300}
          />
        </div>
        <h1 className={styles.title}>
          Agus Dustin <br />
          Sudarta
        </h1>
      </main>
    </div>
  );
}
