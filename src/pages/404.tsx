import styled from "styled-components";

import Link from 'next/link';
import Head from 'next/head';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.3rem;
    line-height: 1.2;
    margin: auto;
`;

const Error = styled.h1`
    font-size: 3rem;
    color: #18a330;
`;

const Info = styled.h2`
    font-size: 2rem;
`;

const NoContent = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 15px;
`;

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