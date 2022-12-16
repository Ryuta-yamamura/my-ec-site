// pages/_app.js

import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import { AuthProvider } from "../components/firebase/auth/authContext"
import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </AuthProvider>
  )
}