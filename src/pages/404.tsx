import Link from 'next/link';
import Head from 'next/head';

import { 
    Wrapper,
    Error,
    Info,
    NoContent,
} from "../styles/404";

const PageNotFound: React.FC = (): JSX.Element => {
    return (
        <Wrapper>
            <Head>
                <title>{`<Error 404 />`}</title>
                <meta name="keywords" content="Error, 404, Error 404, Not found, Page not found" />
                <meta name="description" content="The content for that page was not found" />
            </Head>

            <Error>404 Error</Error>
            <Info>Phew, this is not a bug 😌🙏</Info>
            <NoContent>But the content for that page was not found! 🤔</NoContent>
            <Link href="/">
                <div className="btn-default">Go to Home</div>
            </Link>
        </Wrapper>
    )
}

export default PageNotFound;