import { useState, useCallback, useEffect } from "react";
import { UserContextData, UserContext } from "common/contexts/user";

import * as S from "./styles";
import Header from "components/Header";
import Footer from "components/Footer";

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const [user, setUser] = useState<UserContextData>({} as UserContextData);

    const getUserData = useCallback(async () => {
        const respApi = await fetch('https://api.github.com/users/gabrielrg14')
        const userData = await respApi.json()
        setUser(userData)
    }, [])

    useEffect(() => {
        getUserData()
    }, [getUserData])

    return (
        <UserContext.Provider value={user}>
            <S.LayoutWrapper>
                <Header />
                <S.Main>{children}</S.Main>
                <Footer />
            </S.LayoutWrapper>
        </UserContext.Provider>
    )
}

export default Layout;