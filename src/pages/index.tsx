import { GetStaticProps } from "next"

import { IUser } from "interfaces"
import { UserService } from "services"
import { USERNAME } from "common"
import { HomeTemplate } from "templates"

export const getStaticProps: GetStaticProps = async () => {
    const user = await UserService.getUser(USERNAME)

    return {
        revalidate: 60,
        props: { user }
    }
}

type HomeProps = {
    user: IUser
}

const Home = ({ user }: HomeProps) => {
    return <HomeTemplate user={user} />
}

export default Home
