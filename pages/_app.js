import React, { StrictMode, useEffect } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import Layout from "../src/components/common/Layout";
import store from "../src/redux/store";

import CssBaseline from "@mui/material/CssBaseline";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import PageThemeProvider from "../styles/PageThemeProvider";
import "../styles/globals.css";

const persistor = persistStore(store, {}, function () {
  persistor.persist();
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, refetchOnMount: false },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <StrictMode>
      <Head>Sahitya Blog Website</Head>

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ReactQueryDevtools initialIsOpen={false} />
          <GoogleOAuthProvider clientId="426734307285-dlk38v03lrrbl6moh2lcja09gmsn9uip.apps.googleusercontent.com">
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <PageThemeProvider {...pageProps}>
                  <CssBaseline />
                  <Layout {...pageProps}>
                    <Component {...pageProps} />
                  </Layout>
                </PageThemeProvider>
              </PersistGate>
            </Provider>
          </GoogleOAuthProvider>
        </Hydrate>
      </QueryClientProvider>
    </StrictMode>
  );
}

export default MyApp;
