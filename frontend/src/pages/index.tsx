import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from './login'
import DashboardAdmin from './dashboard/administrador'


export default function Home() {
  return (
    <>
      <DashboardAdmin></DashboardAdmin>

    </>

  )
}
