import { useContext } from "react"
import { UserContext } from "common/contexts/user"

import HomeTemplate from "templates/Home"

const Home = () => {
    const user = useContext(UserContext)
    return <HomeTemplate user={user} />
}

export default Home
