import { useUser } from "hooks"
import { AboutTemplate } from "templates"

const About = () => {
    const { user } = useUser()

    return <AboutTemplate user={user} />
}

export default About
