import { NextSeo } from "next-seo"
import { pageSeo } from "./seo"

import * as S from "./styles"
import Link from "next/link"
import { Button } from "components"

export const PageNotFoundTemplate = () => {
    return (
        <>
            <NextSeo {...pageSeo} />

            <S.Wrapper>
                <S.Error>404 Error</S.Error>
                <S.Info>Phew, this is not a bug 😌🙏</S.Info>
                <S.NoContent>
                    But the content for that page was not found! 🤔
                </S.NoContent>
                <Link href="/" aria-label="Go to Home">
                    <Button variant="secondary">Go to Home</Button>
                </Link>
            </S.Wrapper>
        </>
    )
}
