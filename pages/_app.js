import React from 'react';
import App, { Container } from 'next/app';
import '../static/style/myBootstrap.scss';
import Head from '../components/head';


export default class MyApp extends App {



  render () {
    const { Component, pageProps, auth } = this.props

    return (
      <Container>
        <div >
        <Head></Head>
        <Component {...pageProps} />
        </div>
      </Container>
    )
  }
}
<style jsx global>{`

`}</style>
