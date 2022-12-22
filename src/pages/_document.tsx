import { Html, Head, Main, NextScript } from 'next/document';

const Document: React.FC = (): JSX.Element => {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="images/logo/logo-192.png" />
                <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@600&family=Montserrat:wght@600&display=swap" rel="stylesheet" />
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

export default Document;