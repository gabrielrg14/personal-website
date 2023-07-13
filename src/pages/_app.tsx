import { useEffect } from "react";
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { DefaultSeo } from 'next-seo';
import SEO from "../../next-seo.config";

import * as gtag from "common/lib/gtag";
import GoogleAnalytics from "components/Analytics";
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

import GlobalStyle from "styles/global";
import Layout from "components/Layout";
import NextNProgress from 'nextjs-progressbar';

const App = ({ Component, pageProps }: AppProps) => {
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
            <DefaultSeo {...SEO} />
            <GoogleAnalytics />
            <VercelAnalytics />
            <GlobalStyle />
            <Layout>
                <NextNProgress
                    color="#18a330"
                    height={5}
                    options={{ showSpinner: false }}
                />
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default App;