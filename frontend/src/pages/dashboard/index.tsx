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


interface IDashboardGerenteProps {
    listPedidos: [];
    listCategory:[];
}

export default function Dashboard(props: IDashboardGerenteProps) {

    const setOrders = useOrders(state => state.setOrders);
    const setCategorys = useCategorys(state => state.setCategorys);
    const currentScreen = useCurrentScreen(state => state.current);
    
    setCategorys(props.listCategory);
    setOrders(props.listPedidos);

    
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

                </div>
            </div >
        </>
    )
}


export const getServerSideProps = canSSRAuth(async (ctx) => {
    const apiClient = setupAPIClient(ctx);
    const responseOrder = await apiClient.get('/order');
    const responseCategory = await apiClient.get('/category');

    const Listcategorys = [
        { id: '', name: "Selecione uma categoria" },
        ... responseCategory.data.sort((a, b) => a.name.localeCompare(b.name))
      ];

    const listPedidos = responseOrder.data;
    const listCategory = Listcategorys;
    return {
        props: {
            listPedidos,
            listCategory
        }
    }
}
)
