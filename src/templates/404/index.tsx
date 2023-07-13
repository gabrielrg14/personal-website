import { NextSeo } from 'next-seo';

import * as S from "./styles";
import Link from 'next/link';

const PageNotFoundTemplate = () => {
    return (
        <>
            <NextSeo title="404 Error" />

            <S.Wrapper>
                <S.Error>404 Error</S.Error>
                <S.Info>Phew, this is not a bug 😌🙏</S.Info>
                <S.NoContent>But the content for that page was not found! 🤔</S.NoContent>
                <Link href="/">
                    <div className="btn-default">Go to Home</div>
                </Link>
            </S.Wrapper>
        </>
    )
}

export default PageNotFoundTemplate;