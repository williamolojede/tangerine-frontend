import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
            <link 
                href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" 
                rel="stylesheet"
            />
        </Head>

        <Component {...pageProps} />
      </Container>
    );
  }
}