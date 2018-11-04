import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

// Stylesheets
import '../styles/style.scss';

// Redux store
import configureStore from '../store';


class PageApp extends App {
  static async getInitialProps({ Component, req, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidCatch(error, errorInfo) {
    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container store={store}>
        <Head>
          {/* Defaults */}
        </Head>
        <Provider store={store}>
          <Component {...Object.assign(pageProps)}/>
        </Provider>
      </Container>
    );
  }
}

// Add side effects
let app = PageApp;
app = withRedux(configureStore)(app);
app = withReduxSaga({ async: true })(app);

export default app;
