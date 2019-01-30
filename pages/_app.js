import React from 'react';
import App, { Container } from 'next/app';
import '../style/myBootstrap.scss';


export default class MyApp extends App {



  render () {
    const { Component, pageProps, auth } = this.props

    return (
      <Container>
        <Component {...pageProps} />
        <div className=""></div>
      </Container>
    )
  }
}