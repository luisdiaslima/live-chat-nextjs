import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { BouncyDiv } from '../styles/styled'
import InputEmoji from "react-input-emoji";
import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';


const Identify: NextPage = () => {
  const router = useRouter()
  const [text, setText] = useState("");

  function redirectNext() {
    router.push('/n-chat')
  }


  function handleOnEnter(text: string) {
    localStorage.setItem('name', text)
    router.push('/n-chat')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 onClick={() => redirectNext()} className={styles.title}>
          Bem-vindo ao <label className={styles.welcome}>nChat!</label>
        </h1>

        <p className={styles.description}>
          Como podemos te chamar?
        </p>

        <BouncyDiv>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h2>Meu nome é &rarr;</h2>
              <InputEmoji
                value={text}
                onChange={setText}
                cleanOnEnter
                onEnter={handleOnEnter}
                placeholder="Digite seu nome"
              />
            </div>
          </div>
        </BouncyDiv>

      </main>
      <footer className={styles.footer}>
        <h3 className={styles.powered}>
          Powered by Luís
        </h3>
      </footer>
    </div>
  )
}

export default Identify
