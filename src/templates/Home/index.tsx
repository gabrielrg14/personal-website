import { NextSeo } from "next-seo"

import * as S from "./styles"
import { IUser } from "interfaces"

type HomeTemplateProps = {
    user: IUser
}

export const HomeTemplate = ({ user }: HomeTemplateProps) => {
    return (
        <>
            <NextSeo
                title="Gabriel - Frontend Developer"
                description="Welcome to my personal website. Here you will learn a little more about me, the technologies I have knowledge of, the ones I use and know well, the ones I'm currently studying and also the projects I've developed."
                additionalMetaTags={[
                    {
                        name: "keywords",
                        content:
                            "Gabriel, Gabriel Rapucci, Gabriel Rapucci Gonzalez, Campinas, Brazil, Dev, Web Dev, Frontend, Dev Frontend, Developer, Frontend Developer, React Developer, JavaScript Developer, Portfolio, Resume, Project"
                    }
                ]}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/`}
            />

            <S.Wrapper>
                <S.Avatar>
                    {user.avatar_url && (
                        <S.AvatarImage
                            src={user.avatar_url}
                            height={250}
                            width={250}
                            priority
                            alt="Gabriel's avatar image"
                        />
                    )}
                </S.Avatar>

                <S.PillText>
                    <h1>{user.name}</h1>
                </S.PillText>

                <S.BlackPillText>
                    <S.Info>{user.company}</S.Info>
                    <S.Info>{user.location}</S.Info>
                </S.BlackPillText>
            </S.Wrapper>
        </>
    )
}
