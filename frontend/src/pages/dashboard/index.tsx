import Head from 'next/head'
import styles from './styles.module.scss'
import React, { ChangeEvent, FormEvent, createRef, useContext, useEffect, useState } from 'react'
import { Header } from '../../Components/Header'
import { SideBar } from '../../Components/sidebar'
import useCurrentScreen from '../../Store/useCurrentScreen'
import { ECurrentScreen } from '../../enums/ECurrentScreen'
import { CadastrarFuncionario } from '../../Components/CadastrarFuncionario'
import { CadastrarCategoria } from '../../Components/CadastrarCategoria'
import { CadastrarProduto } from '../../Components/CadastrarProduto'
import Caixa from '../../Components/Caixa'
import Pedidos from '../../Components/Pedidos'
import { canSSRAuth } from '../../utils/canSSRAuth'
import { setupAPIClient } from '../../services/api'
import useUser from '../../Store/useUser'
import useOrders from '../../Store/useOrders'
import useCategorys from '../../Store/useCategory'
import { IOrder } from '../../interfaces/IOrder'
import { api } from '../../services/apiClient'
import { IUser } from '../../interfaces/IUser'
import Perfil from '../../Components/Perfil'


interface IDashboardGerenteProps {
    listPedidos: [];
    user: IUser
}

export default function Dashboard(props: IDashboardGerenteProps) {
    const user = useUser(state => state.user)
    const setUser = useUser(state => state.setUser)
    const setOrders = useOrders(state => state.setOrders);
    const currentScreen = useCurrentScreen(state => state.current);
    const setcurrentScreen = useCurrentScreen(state => state.setCurrent);
    setOrders(props.listPedidos);
    setUser(props.user)
    console.log(props.user)

    if (user.jobtitle == 'CAIXA') {
        setcurrentScreen(ECurrentScreen.CAIXA);
    }
    if (user.jobtitle == 'PIZZAIOLO') {
        setcurrentScreen(ECurrentScreen.PEDIDOS);
    }

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
                    {user?.jobtitle == "ADMIN" &&
                        < SideBar />
                    }
                    {currentScreen == ECurrentScreen.CADASTROFUNCIONARIO &&
                        <CadastrarFuncionario></CadastrarFuncionario>
                    }
                    {currentScreen == ECurrentScreen.CADASTROCATEGORIA &&
                        <CadastrarCategoria></CadastrarCategoria>
                    }
                    {currentScreen == ECurrentScreen.CADASTROPRODUTO &&
                        <CadastrarProduto></CadastrarProduto>
                    }
                    {currentScreen == ECurrentScreen.CAIXA &&
                        <Caixa></Caixa>
                    }
                    {currentScreen == ECurrentScreen.PEDIDOS &&
                        <Pedidos></Pedidos>
                    }
                    {currentScreen == ECurrentScreen.PERFIL &&
                        <Perfil />
                    }
                </div>
            </div >
        </>
    )
}


export const getServerSideProps = canSSRAuth(async (ctx) => {
    const apiClient = setupAPIClient(ctx);
    const responseUser = await apiClient.get('/profile');
    const responseOrder = await apiClient.get('/order');
    const listPedidos: IOrder = responseOrder.data;
    const user = responseUser.data;
    return {
        props: {
            listPedidos,
            user
        }
    }
}
)
