import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from "../store/store";
import { Provider } from "react-redux";
import Head from 'next/head'
import Header from "../components/Header/Header"
import { RouteGuard } from '../components/route-guard/RouteGuard';

function MyApp({ Component, pageProps }: AppProps) {


  return <>
    <Head>
      <meta charSet="utf-8" />
      <title>Mathwell Teens: MBA</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
    </Head>
    <div className="font-nunito min-h-screen h-screen w-full bg-slate-50">
      <Header view="dashboard" />
      <div className="flex  text-center mx-auto w-full space-x-8  h-full">
        <RouteGuard>
          <Component {...pageProps} />
        </RouteGuard>
      </div>
    </div>

  </>
}

export default wrapper.withRedux(MyApp)