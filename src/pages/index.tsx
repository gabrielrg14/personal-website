import { useContext } from "react";
import { UserContext } from '../contexts/user';

import Head from 'next/head';

import { 
    Wrapper,
    Avatar,
    AvatarImage,
    PillText,
    BlackPillText,
    Info,
} from "../styles/index";

const Home: React.FC = (): JSX.Element => {
    const user = useContext(UserContext);

    return (
        <Wrapper>
            <Head>
                <title>{`<Gabriel - Frontend Developer />`}</title>
                <meta name="keywords" content="Gabriel, Gabriel Rapucci Gonzalez, Campinas, Brazil, Frontend Developer" />
                <meta name="description" content="Home page with some information about Gabriel" />
            </Head>     

            <Avatar>
                {user.avatar_url && (
                    <AvatarImage 
                        src={user.avatar_url}
                        height={250} width={250}
                        priority
                        alt="Gabriel's avatar image" 
                    />
                )}
            </Avatar>

            <PillText>
                <h1>{user.name}</h1>
            </PillText>

            <BlackPillText>
                <Info>{user.company}</Info>
                <Info>{user.location}</Info>
            </BlackPillText>
        </Wrapper>
    )
}

export default Home;