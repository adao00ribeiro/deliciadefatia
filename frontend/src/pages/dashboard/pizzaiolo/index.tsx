import Head from 'next/head'
import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react'
import { Header } from '../../../Components/Header'
import styles from './styles.module.scss'


export default function DashboardPizzaiolo() {

    return (
        <>
            <Head>
                <title>DashBoard</title>
                <meta name="description" content=" app delicia de fatia" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Header />
                <main>
                    <div>
                        <h1>Ultimos pedidos</h1>
                        <button>

                        </button>
                    </div>

                    <article>

                    </article>

                </main>
            </div>
        </>
    )
}
