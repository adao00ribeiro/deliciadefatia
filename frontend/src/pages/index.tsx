import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from './Login'
import Dashboard from './dashboard'

export default function Home() {
  return (
  <>
    { /*<Login></Login>*/}
    <Dashboard />
  </>

  )
}
