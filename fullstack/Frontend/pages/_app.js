import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import Layout from "../src/components/feature/Layout";
import store from "../src/redux/store";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import CssBaseline from "@mui/material/CssBaseline";
import PageThemeProvider from "../styles/PageThemeProvider";
import Script from "next/script"; // Import next/script component
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false, refetchOnMount: false },
    },
  });

  return (
    <>
      <Head>
        {/* Replace the script tag with next/script */}
        <Script
          src="https://cdn.ethers.io/lib/ethers-5.0.umd.min.js"
          strategy="beforeInteractive"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Provider store={store}>
            <PageThemeProvider {...pageProps}>
              <CssBaseline />
              <Layout {...pageProps}>
                <Component {...pageProps} />
              </Layout>
            </PageThemeProvider>
          </Provider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
