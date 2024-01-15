import { useUser } from "hooks"
import { HomeTemplate } from "templates"

const Home = () => {
    const { user } = useUser()

    return <HomeTemplate user={user} />
}

export default Home
