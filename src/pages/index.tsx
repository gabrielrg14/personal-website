import { useStore } from "store"

import HomeTemplate from "templates/Home"

const Home = () => {
    const { user } = useStore()
    return <HomeTemplate user={user} />
}

export default Home
