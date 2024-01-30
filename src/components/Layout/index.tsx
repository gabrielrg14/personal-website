import { useEffect } from "react"

import * as S from "./styles"
import { useUser } from "hooks"
import { USERNAME } from "common"
import { Header, Main, Footer } from "components"

type LayoutProps = {
    children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    const { setUserStore } = useUser()

    useEffect(() => {
        setUserStore(USERNAME)
    }, [setUserStore])

    return (
        <S.Wrapper>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </S.Wrapper>
    )
}
