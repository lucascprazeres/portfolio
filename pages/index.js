import Head from 'next/head'
import { FaGithub, FaLinkedin, FaMedium, FaDev } from 'react-icons/fa'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lucas Prazeres</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/perfil.png" alt="Lucas Prazeres" />

        <h1 className={styles.title}>
          Lucas Prazeres
        </h1>

        <p className={styles.description}>@lucascprazeres</p>

        <div className={styles.grid}>
          <a href="https://github.com/lucascprazeres" className={styles.card}>
            <header>
              <FaGithub size={24} />
              <h2>GitHub</h2>
            </header>
            <p>Meus projetos.</p>
          </a>

          <a href="https://www.linkedin.com/in/lucascprazeres/" className={styles.card}>
            <header>
              <FaLinkedin size={24} />
              <h2>LinkedIn</h2>
            </header>
            <p>Histórico profissional.</p>
          </a>

          <a
            href="https://medium.com/@lucascprazeres"
            className={styles.card}
          >
            <header>
              <FaMedium size={24} />
              <h2>Medium</h2>
            </header>
            <p>Artigos sobre programação.</p>
          </a>

          <a
            href="https://dev.to/lucascprazeres"
            className={styles.card}
          >
            <header>
              <FaDev size={24}/>
              <h2>Dev.to</h2>
            </header>
            <p>
              Mais artigos escritos.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
