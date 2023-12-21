import { useCallback, useEffect } from "react"
import { useStore } from "store"

import * as S from "./styles"
import Header from "components/Header"
import Footer from "components/Footer"

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const { setUser } = useStore()

    const getUserData = useCallback(async () => {
        const respApi = await fetch("https://api.github.com/users/gabrielrg14")
        const userData = await respApi.json()
        setUser(userData)
    }, [setUser])

    useEffect(() => {
        getUserData()
    }, [getUserData])

    return (
        <S.LayoutWrapper>
            <Header />
            <S.Main>{children}</S.Main>
            <Footer />
        </S.LayoutWrapper>
    )
}

export default Layout
