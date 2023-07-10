import Document, { DocumentContext , Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
    
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                    sheet.collectStyles(<App {...props} />),
                })
    
            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <link rel="apple-touch-icon" href="images/logo/logo-512.png" />
                    <link rel="manifest" href="/manifest.json" />
                    <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@600&family=Montserrat:wght@600&display=swap" rel="stylesheet" />
                    <meta name="google-site-verification" content="11r8K6MLmUAgq8eTWLXk49GhEiZuybZx1h8kIyO6PX8" />
                    <meta name="robots" content="index" />
                    <meta name="google" content="notranslate" />
                    <meta name="theme-color" content="#18a330" />
                    <meta name="keywords" 
                        content="Portfolio, Project, Resume, Frontend Resume, Dev Resume, Frontend Developer, Developer, React, Next, Web" 
                    />
                    <meta name="description"
                        content="Welcome to my personal website. Here you will learn a little more about me, the technologies I have knowledge of, the ones I use and know well, the ones I'm currently studying and also the projects I've developed"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;