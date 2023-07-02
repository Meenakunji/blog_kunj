import React from "react";
import { StrictMode } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import Layout from "../src/components/feature/Layout";
import store from "../src/redux/store";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import CssBaseline from "@mui/material/CssBaseline";
import PageThemeProvider from "../styles/PageThemeProvider";
import Script from "next/script";
import Head from "next/head";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false, refetchOnMount: false },
    },
  });

  return (
    <StrictMode>
      <Head>
        <Script
          src="https://cdn.ethers.io/lib/ethers-5.0.umd.min.js"
          strategy="beforeInteractive"
        />
      </Head>
      {/* <SessionProvider session={pageProps.session}> */}
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ReactQueryDevtools initialIsOpen={false} />
          {/* <GoogleOAuthProvider clientId="326983461013-r3ej3ecqlon91rc9olrq1fakslq435fn.apps.googleusercontent.com"> */}
          <Provider store={store}>
            <PageThemeProvider>
              <CssBaseline />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </PageThemeProvider>
          </Provider>
          {/* </GoogleOAuthProvider> */}
        </Hydrate>
      </QueryClientProvider>
      {/* </SessionProvider> */}
    </StrictMode>
  );
}

export default MyApp;
