import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from './login'
import Dashboard from './dashboard'
import { GetServerSideProps } from 'next'


export default function Home() {
  return (
    <>
      <Login></Login>
    </>
  )
}
