import { useStore } from "store"

import AboutTemplate from "templates/About"

const About = () => {
    const { user } = useStore()
    return <AboutTemplate user={user} />
}

export default About
