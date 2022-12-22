import { useEffect } from 'react';
import type { AppProps } from "next/app";
import { useRouter } from 'next/router';

import * as gtag from '../lib/gtag';
import Analytics from '../components/Analytics';

import GlobalStyle from "../styles/global";
import Layout from "../components/Layout";

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            gtag.pageview(url);
        }
        router.events.on('routeChangeComplete', handleRouteChange);
        router.events.on('hashChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
            router.events.off('hashChangeComplete', handleRouteChange);
        }
    }, [router.events])

    return (
        <>
            <GlobalStyle />
            <Layout>
                <Analytics />
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default App;