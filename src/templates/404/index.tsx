import { NextSeo } from "next-seo"
import { pageSeo } from "./seo"

import * as S from "./styles"
import { Error404, HomeButton, NotABug, PageNotFound } from "./sub-components"

export const PageNotFoundTemplate = () => {
    return (
        <>
            <NextSeo {...pageSeo} />

            <S.Wrapper>
                <Error404 />
                <NotABug />
                <PageNotFound />
                <HomeButton />
            </S.Wrapper>
        </>
    )
}
