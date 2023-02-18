import { useState, useCallback, useEffect } from "react";
import { UserContextData, UserContext } from "../../common/contexts/user";

import Header from "../Header";
import Footer from "../Footer";

import { LayoutWrapper, Main } from "./styles";

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
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
            <LayoutWrapper>
                <Header />
                <Main>{children}</Main>
                <Footer />
            </LayoutWrapper>
        </UserContext.Provider>
    )
}

export default Layout;