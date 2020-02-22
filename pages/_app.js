import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import withReduxStore from "../lib/with-redux-store";
import "../styles/app.scss";
class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} className="next-content" />
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
