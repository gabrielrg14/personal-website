import { NextSeo } from 'next-seo';
import Link from 'next/link';

import { 
    Wrapper,
    Error,
    Info,
    NoContent,
} from "../common/styles/pages/404";

const PageNotFound: React.FC = (): JSX.Element => {
    return (
        <>
            <NextSeo title="404 Error" />

            <Wrapper>
                <Error>404 Error</Error>
                <Info>Phew, this is not a bug 😌🙏</Info>
                <NoContent>But the content for that page was not found! 🤔</NoContent>
                <Link href="/">
                    <div className="btn-default">Go to Home</div>
                </Link>
            </Wrapper>
        </>
    )
}

export default PageNotFound;