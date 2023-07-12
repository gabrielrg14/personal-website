import { useContext } from "react";
import { UserContext } from "../common/contexts/user";

import { NextSeo } from 'next-seo';

import { 
    Wrapper,
    Avatar,
    AvatarImage,
    PillText,
    BlackPillText,
    Info,
} from "../common/styles/pages/index";

const Home: React.FC = (): JSX.Element => {
    const user = useContext(UserContext);

    return (
        <>
            <NextSeo
                title="Gabriel - Frontend Developer"
                description="Welcome to my personal website. Here you will learn a little more about me, the technologies I have knowledge of, the ones I use and know well, the ones I'm currently studying and also the projects I've developed."
                additionalMetaTags={[{
                    name: "keywords",
                    content: "Gabriel, Gabriel Rapucci, Gabriel Rapucci Gonzalez, Campinas, Brazil, Dev, Web Dev, Frontend, Dev Frontend, Developer, Frontend Developer, React Developer, JavaScript Developer, Portfolio, Resume, Project"
                }]}
            />
            
            <Wrapper>
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
        </>
    )
}

export default Home;