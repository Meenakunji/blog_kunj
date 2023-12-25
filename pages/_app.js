import React from "react";
import { StrictMode } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import Layout from "../src/components/feature/Layout";
import store from "../src/redux/store";

import "bootstrap/dist/css/bootstrap.css";
import CssBaseline from "@mui/material/CssBaseline";
import PageThemeProvider from "../styles/PageThemeProvider";
import Script from "next/script";
import Head from "next/head";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import "../styles/globals.css";
// import { SessionProvider } from "next-auth/react";

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
      <Head>Jupiter Blog Website</Head>

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
