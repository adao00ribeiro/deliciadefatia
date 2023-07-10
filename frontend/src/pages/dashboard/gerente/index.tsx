import Head from 'next/head'
import styles from './styles.module.scss'
import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react'
import { Header } from '../../../Components/Header'
import { SideBar } from '../../../Components/sidebar'
import { CadastrarFuncionario } from '../../../Components/CadastrarFuncionario'
import { CadastrarCategoria } from '../../../Components/CadastrarCategoria'
import { CadastrarProduto } from '../../../Components/CadastrarProduto'
import Caixa from '../../../Components/Caixa'




export default function DashboardGerente() {



    return (
        <>
            <Head>
                <title>DashBoard</title>
                <meta name="description" content=" app delicia de fatia" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.container}>
                <Header />
                <div className={styles.containerMain}>
                    <SideBar />
                    <CadastrarFuncionario />
                </div>
            </div >
        </>
    )
}
