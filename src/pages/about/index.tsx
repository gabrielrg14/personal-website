import { useContext } from "react";
import { UserContext } from "common/contexts/user";

import AboutTemplate from "templates/About";

const About = () => {
    const user = useContext(UserContext);
    return <AboutTemplate user={user} />
}

export default About;