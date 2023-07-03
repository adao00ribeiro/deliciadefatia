import Head from 'next/head'
import Image from 'next/image'
import styles from './styles.module.scss'
import Link from 'next/link'


export default function Login() {

    return (
        <>
            <Head>
                <title>Acessar</title>
                <meta name="description" content=" app delicia de fatia" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.containerCenter}>
                <Image src="/FatiaPizza.svg" alt='Logo Fatia de Pizza' width={200} height={200} />
                <div className={styles.containerLogin}>
                    <h1>Login</h1>
                    <form >
                        <input type="email" name='email' placeholder='Seu email'></input>
                        <input type="password" name='password' placeholder='Sua senha'></input>
                        <button type="submit"  > Acessar</button>
                    </form>
                    <Link href={'/registrar'}> Não possui uma conta? Cadastre-se</Link>
                </div>
            </div>
        </>
    )
}
