import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Servers from 'components/Servers'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  let router = useRouter()
  let [isFirstRender, setIsFirstRender] = useState(true)

  useEffect(() => {
    setIsFirstRender(false)
  }, [])
  if (!router.isReady || isFirstRender) {
    return null
  }

  return (
    <>
      <Head>
        <title>Discord Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen text-gray-100">
        <Servers />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
