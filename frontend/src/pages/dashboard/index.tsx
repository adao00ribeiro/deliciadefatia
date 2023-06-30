import Head from 'next/head'
import styles from './styles.module.scss'
import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react'



export default function Dashboard() {

    return (
        <>
            <Head>
                <title>DashBoard</title>
                <meta name="description" content=" app delicia de fatia" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.containerCenter}>


            </div>
        </>
    )
}
