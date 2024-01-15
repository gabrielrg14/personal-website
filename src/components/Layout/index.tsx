import { useEffect } from "react"

import * as S from "./styles"
import { useUser } from "hooks"
import { Header, Footer } from "components"

type LayoutProps = {
    children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    const { setUserStore } = useUser()

    useEffect(() => {
        setUserStore("gabrielrg14")
    }, [setUserStore])

    return (
        <S.LayoutWrapper>
            <Header />
            <S.Main>{children}</S.Main>
            <Footer />
        </S.LayoutWrapper>
    )
}
