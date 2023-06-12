import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import Layout from "../src/components/feature/Layout";
import store from "../src/redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false, refetchOnMount: false },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Provider store={store}>
            <Layout {...pageProps}>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
export default MyApp;
